import { graphql } from 'gatsby';
import React from 'react';
import * as styles from '../styles/products.module.scss'
import Layout from '../components/Layout';
import Img from 'gatsby-image';


export default function products({ data }) {
  return (
    <Layout>
    <div className={styles.images}>
      {data.install.product.map(item => (
        <Img 
        fluid={item.fluid}
        key={item.fluid.src} 
        alt={item.title}
        />
      ))}
    </div>
  </Layout>
  )
}

export const query = graphql`
query products($slug: String) {
  install: contentfulProducts(slug: {eq: $slug}) {
    slug
    product {
      fluid{
				...GatsbyContentfulFluid
      }
    title
    }
  }
}
`

