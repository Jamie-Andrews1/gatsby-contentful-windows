import React from 'react'
import { graphql } from "gatsby";
import Layout from '../components/Layout';
import Img from 'gatsby-image';
import * as styles from '../styles/home.module.scss'


export default function Home({ data }) {
  return (
    <Layout>  
        <section className={styles.header}>
            <div>
            <h3>Open Yourself to New Technology</h3>
            <p>New A+++ Ratings Available</p>
          </div>
          <Img fluid={data.file.childImageSharp.fluid} />
        </section>
        <section className={styles.quotes}>
        <div>
        <div className={styles.quote}><h2>Ordering a Quote</h2>
          <p>when getting a quote let be sure to let us know sizes width by height. Also all possible information of layout such as how many opening sections and whether doors open in or out. leave details, or a sales rep can be in touch to go through it with you.
            </p>
            </div>
            <div className={styles.contact}>
            <h2>Contact us</h2>
            <span><h3>Telephone:</h3><p>04847 6474673</p></span>
            <span><h3>Email:</h3><p>fake@fakeemail.com</p></span>
            </div>
            </div>
        <div className={styles.form}>
            <form >
              <h2>Get a Quote</h2>
              <label htmlFor="name">Name</label>
              <input type="text"></input>
              <label htmlFor="email">Email</label>
              <input type="email"></input>
              <label htmlFor="phone">Phone</label>
              <input type="number"></input>
              <label htmlFor="product">Product</label>
              <select id="product" name="product">
                <option value="windows">Windows</option>
                <option value="doors">Doors</option>
                <option value="conservatories">Conservatories</option>
                <option value="bi-folds">Bi-Folds</option>
              </select>
              <label htmlFor="other">Other info</label>
              <textarea type="text" name="other"></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
          </section>
    </Layout>
  )
}

  export const query = graphql`
  query bay {
    file(relativePath: {eq: "bay .jpg"}) {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`