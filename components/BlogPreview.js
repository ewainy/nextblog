import Link from 'next/link'

export default function BlogPreview({ blog }) {
  const { title, slug, summary} = blog.fields

  return (
 
 
   
    <div className="card">
               
        <div className="info">
          <h4>{ title }</h4>
          <p>{summary}</p>
        
        <div className="actions">
          <Link href={'/blog/' + slug}><a>Read More</a></Link>
        </div>
      </div>
      

      <style jsx>{`
      
       .intro {
         flex-direction: column;
       }
        .info {
          flex-direction: row;
    padding: 10px;
    border-style: solid;
    border-width: 3px;
    border-image: linear-gradient( rgb(253, 0, 219),  rgb(125, 71, 252),  rgb(87, 186, 248), rgb(2, 248, 207)) 1;
       width: 250px;
       height: 250px;
       margin: 20px;
 text-align: center;
        }
    
        .info h4 {
         
          text-transform: uppercase;
          color:  rgb(226, 214, 253);
          text-shadow:
              0 0 7px  rgb(125, 71, 252),
              0 0 10px  rgb(125, 71, 252),
              0 0 21px rgb(133, 84, 248),
              0 0 42px  rgb(146, 102, 250),
              0 0 82px  rgb(165, 129, 250),
              0 0 92px  rgb(182, 155, 247),
              0 0 130px  rgb(192, 167, 250);
      };
        }
        .info p {
 font-size: 1.25rem;
        }
       
       
        .actions a {
          color: white;
          background: linear-gradient( to right,rgb(253, 0, 219),  rgb(125, 71, 252),  rgb(87, 186, 248), rgb(2, 248, 207));
          padding: 7px;
          text-decoration: none;
          text-transform: uppercase;
          border: 2px white solid;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .actions a:hover {
            background: linear-gradient( to left, rgb(253, 0, 219),  rgb(125, 71, 252),  rgb(87, 186, 248), rgb(2, 248, 207));

        }
      `}</style>
    </div>

  )
}