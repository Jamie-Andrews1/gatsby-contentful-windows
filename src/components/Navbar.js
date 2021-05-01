import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image';


export default function Navbar() {
  const data = useStaticQuery(graphql`
  query Siteinfo {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: {eq: "fensaLogo.jpg"}) {
      relativePath
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)
  const { title } = data.site.siteMetadata

  return (
  <nav>
    <h1>{ title }</h1>
    <div className="logo">
    <Img  fluid={data.file.childImageSharp.fluid} />
    </div>
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/windows">Windows</Link>
      <Link to="/doors">Doors</Link>
      <Link to="/conservatories">Conservatories</Link>
      <Link to="/bi-folds">Bi-Folds</Link>
    </div>
  </nav>
  )
}
