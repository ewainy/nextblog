import { createClient } from 'contentful'
import BlogPreview from '../components/BlogPreview'

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "blog" })

  return {
    props: {
      blogs: res.items,
    },
    revalidate: 60,
  }
}

export default function BlogPosts({ blogs }) {


  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <BlogPreview key={blog.sys.id} blog={blog} />
      ))}

<style jsx>{`
        .blog-list {
         display: grid;
         grid-template-columns: 1fr 1fr 1fr;
         grid-gap: 10px;
      
        }
      `}</style>
    </div>
  )
}