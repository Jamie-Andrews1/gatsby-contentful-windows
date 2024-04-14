import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "../styles/home.module.scss";
import { Dialog } from "../components/Dialog";

export function Head() {
  return (
    <>
      <title>J Windows</title>
      <link id="favicon-icon" rel="icon" href="icon.jpg" />
    </>
  );
}

export default function Home({ data }) {
  const defaultData = {
    name: "",
    email: "",
    phone: "",
    emailValid: false,
    nameValid: false,
    phoneValid: false,
    formErrors: { name: "", email: "", phone: "" },
    formValid: false,
  };
  const [formData, setFormData] = useState(defaultData);
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState({
    bgc: "",
    comment: { status: "", errors: "" },
  });

  function handleSubmit(e) {
    console.log(formData);
    e.preventDefault();
    if (formData.formValid) {
      setIsOpen(true);
      setContent({
        bgc: "green",
        comment: { status: "Success Form Submitted" },
      });
      clearFields();
    } else {
      const errors = Object.entries(formData.formErrors)
        .filter(([input, entry]) => entry !== "")
        .map(([key, value]) => {
          return ` ${key}: ${value}`;
        });

      setIsOpen(true);
      setContent({
        bgc: "red",
        comment: {
          status: `Form Incomplete:`,
          errors: `${errors}`,
        },
      });
    }
  }

  function clearFields() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";

    setFormData(defaultData);
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    if (value === "") {
      setFormData(prevFormData => ({
        ...prevFormData,
        formErrors: { ...prevFormData.formErrors, [name]: "" },
      }));
    }
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    validateField(name, value);
  }

  function validateField(fieldName, value) {
    let fieldValidationErrors = formData.formErrors;
    let emailValid = formData.emailValid;
    let nameValid = formData.nameValid;
    let phoneValid = formData.phoneValid;

    switch (fieldName) {
      case "email":
        const val = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
        emailValid = val.test(value);
        fieldValidationErrors.email = emailValid ? "" : " Is invalid!!";
        break;
      case "name":
        nameValid = value.length > 2;
        fieldValidationErrors.name = nameValid ? "" : " Is too short!!";
        break;
      case "phone":
        const ph = /^\+?[0-9]{7,14}$/i;
        phoneValid = ph.test(value);
        fieldValidationErrors.phone = phoneValid
          ? ""
          : " Number is not valid!!";
        break;
      default:
        break;
    }
    setFormData(prevFormData => {
      const updatedFormData = {
        ...prevFormData,
        emailValid: emailValid,
        nameValid: nameValid,
        phoneValid: phoneValid,
        formErrors: fieldValidationErrors,
      };
      return {
        ...updatedFormData,
        ...validateForm(updatedFormData),
      };
    });
  }
  function validateForm(formDat) {
    return {
      formValid: formDat.emailValid && formDat.nameValid && formDat.phoneValid,
    };
  }
  function forErrors(error) {
    return error.length === 0 ? "" : `${error}`;
  }

  return (
    <Layout>
      <Dialog content={content} set={setIsOpen} isOpen={isOpen} />
      <section className={styles.header}>
        <div>
          <h3>Open Yourself to New Technology</h3>
          <p>New A+++ Ratings Available</p>
        </div>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="" />
      </section>
      <section className={styles.quotes}>
        <div className={styles.quoteWrapper}>
          <div className={styles.quote}>
            <h2>Ordering a Quote</h2>
            <p>
              when getting a quote let be sure to let us know sizes width by
              height. Also all possible information of layout such as how many
              opening sections and whether doors open in or out. leave details,
              or a sales rep can be in touch to go through it with you.
            </p>
          </div>

          <div className={styles.contact}>
            <h2>Contact us</h2>
            <span>
              <h3>Telephone:</h3>
              <p>04847 6474673</p>
            </span>
            <span>
              <h3>Email:</h3>
              <p>fake@fakeemail.com</p>
            </span>
          </div>
        </div>
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <h2>Get a Quote</h2>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              onChange={handleChange}
            ></input>
            <p
              className={styles.formError}
              data={forErrors(formData.formErrors.name)}
            ></p>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
            ></input>
            <p
              className={styles.formError}
              data={forErrors(formData.formErrors.email)}
            ></p>
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="number"
              name="phone"
              onChange={handleChange}
            ></input>
            <p
              className={styles.formError}
              data={forErrors(formData.formErrors.phone)}
            ></p>
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
  );
}

export const query = graphql`
  query bay {
    file(relativePath: { eq: "bay .jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
