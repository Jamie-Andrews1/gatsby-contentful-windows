import { graphql } from 'gatsby';
import React from 'react';
import * as styles from '../styles/products.module.scss'
import Layout from '../components/Layout';
import { GatsbyImage } from 'gatsby-plugin-image';
export { Head } from '../pages/index'

export default function products({ data }) {
  return (
    <Layout>
    <div className={styles.images}>
      {data.install.product.map(item => (
        <GatsbyImage
        image={item.gatsbyImageData}
        key={item.title}
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
      gatsbyImageData(layout: FULL_WIDTH)
      title
    }
  }
}
`