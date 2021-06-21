import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
            Bitesize Blog
            </h1>
          </a>
        </Link>
        <p>☆ Short and sweet posts about my coding journey, what I have learned and sharing resources that I find useful ☆ </p>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>❤️</p>
      </footer>


        <style jsx>{`

     
   
      
.page-content {
  text-align:center;  
}
  
     
      `}
      </style>
    </div>
  )
}