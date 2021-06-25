import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import SyntaxHighlighter from "react-syntax-highlighter";
import {gradientDark} from "react-syntax-highlighter/dist/cjs/styles/hljs";

import Image from 'next/image'

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
  const options = {
    renderMark: {
      [MARKS.CODE]: (text) => {
        return (
          <SyntaxHighlighter
            language="javascript"
            style={gradientDark}
            wrapLongLines
         
           
          >
            {text}
          </SyntaxHighlighter>
        );
      },
    },

    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        // render the EMBEDDED_ASSET as you need
        return (
          <Image
            src={`https://${node.data.target.fields.file.url}`}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt={node.data.target.fields.description}
          />
        );
      },
    }
  }



  
  
console.log(blog)
  
return (
    <div>

        
      <div className="content">
        <h2>{title}</h2>
      
        <div>{documentToReactComponents(post, options)} </div>
      
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

.content code {
    color: white;
  } 
     
      `}
      </style>
    </div>
  )
}
