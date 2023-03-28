import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import * as styles from '../styles/test.module.scss'
export { Head } from '../pages/index'

export default function testimonials({ data }) {

  return (
    <Layout>
            <h1>Testimonials</h1> 
    <div className={styles.test}>
      {data.test.testimonial.map(item => (
      <article key={item.Name}>
        <h2>{item.Name}</h2>
        <p>{item.test}</p>
        </article>
))}
    </div>
  </Layout>
  )
}

export const query = graphql`
query MyQuery($slug: String) {
test: contentfulTestimonials(slug: {eq: $slug}) {
    slug
    testimonial {
      Name
      test
    }
  }
}
`