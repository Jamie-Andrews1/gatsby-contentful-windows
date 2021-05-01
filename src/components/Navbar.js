import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { StaticImage } from "gatsby-plugin-image"


export default function Navbar() {
  const data = useStaticQuery(graphql`
  query Siteinfo {
    site {
      siteMetadata {
        title
      }
    }
  }
  `)
  const { title } = data.site.siteMetadata

  return (
  <nav>
    <h1>{ title }</h1>
    <div className="logo">
    <StaticImage  layout="constrained" 
    src="../images/fensaLogo.jpg"
    alt="Fensa Registered Installer"
    />
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
