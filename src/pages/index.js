import React, { useState } from 'react'
import { graphql } from "gatsby";
import Layout from '../components/Layout';
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from '../styles/home.module.scss'
import FormErrors from '../components/FormErrors';

export function Head() {
  return (
    <>
      <title>J Windows</title>
      <link id="icon" rel="icon" href="../images/favicon.ico" />
    </>
  )
}
export default function Home({ data }) {
  const [formData, setFormData] = useState({
    name: '', 
    email: '', 
    phone: '', 
    emailValid: false, 
    nameValid: false,
    phoneValid:false,
    formErrors: {name: '', email: '', phone: ''},
    formValid: false
})

function handleSubmit(e){
  e.preventDefault();
    
}

function handleChange(e){
  const name = e.target.name
  const value = e.target.value
  
  setFormData({...formData, [name]: value})
  validateField(name, value)
}

  function validateField(fieldName, value) {
    let fieldValidationErrors = formData.formErrors
    let emailValid = formData.emailValid
    let nameValid = formData.nameValid
    let phoneValid = formData.phoneValid
  
    switch(fieldName) {
      case 'email':
    const val = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
        emailValid = val.test(value);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid!!';
        break;
      case 'name':
        nameValid = value.length >= 2;
        fieldValidationErrors.name = nameValid ? '': ' is too short!!';
        break;
      case 'phone':
        phoneValid = value.length === 11;
        fieldValidationErrors.phone = phoneValid ? '': 'Number is not valid!!'
        break;
      default:
        break;
    }
    setFormData({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      nameValid: nameValid
    }, validateForm())
  }
    function validateForm(){
      setFormData({ formValid: formData.emailValid && formData.nameValid })
    }
    
    function forErrors(error){
       return error.length === 0 ? '' :  `${error}`
      }

  return (
    <Layout>  
      <section className={styles.header}>
        <div>
            <h3>Open Yourself to New Technology</h3>
            <p>New A+++ Ratings Available</p>
        </div>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="" />
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
            <FormErrors formErrors={formData.formErrors} />
            <form onSubmit={handleSubmit}>
              <h2>Get a Quote</h2>
              <label htmlFor="name">Name</label>
              <p style={{color:'red',backgroundColor:'white'}}>{forErrors(formData.formErrors.name)}</p>
              <input type="text" 
                name="name"
                onChange={handleChange}
              ></input>
              <label htmlFor="email">Email</label>
              <p style={{color:'red', backgroundColor:'white'}}>{forErrors(formData.formErrors.email)}</p>
              <input type="email"
                name="email"
                onChange={handleChange}
              ></input>
              <label htmlFor="phone">Phone</label>
              <p style={{color:'red', backgroundColor:'white'}}>{forErrors(formData.formErrors.phone)}</p>
              <input type="number"
                name="phone"
                onChange={handleChange}
              ></input>
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
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }`