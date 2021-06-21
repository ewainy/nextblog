import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'


const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({ 
    content_type: "blog" 
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'blog',
    'fields.slug': params.slug
  })

  return {
    props: { blog: items[0] }
  }

}

export default function BlogPreview({ blog }) {
 const {  title, post } = blog.fields


  return (
    <div>

        
      <div className="content">
        <h2>{title}</h2>
               <div>{documentToReactComponents(post)} </div>
        
      </div>

      <style jsx>{`

     
        h2 {
          text-transform: uppercase;    
  color: white;
 }
      
.content {
text-align:center;
letter-spacing: 1px;
line-height: 1.5cm;
padding: 20px;

}
  .content p {
    font-family: 'Roboto Condensed', sans-serif;
  }
     
      `}
      </style>
    </div>
  )
}
