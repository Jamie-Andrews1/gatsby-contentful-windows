const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const {data} = await graphql(`
  query installs {
    allContentfulProducts {
      edges {
        node {
          slug
        }
      }
    }
    allContentfulTestimonials {
      edges {
        node {
          slug
        }
      }
    }
  }
  
  `)

  data.allContentfulProducts.edges.forEach(product => {
    actions.createPage({
      path: '/' + product.node.slug,
      component: path.resolve('./src/templates/products.js'),
      context: {slug: product.node.slug}
    })
  })
  data.allContentfulTestimonials.edges.forEach(testimonial => {
    actions.createPage({
      path: '/' + testimonial.node.slug,
      component: path.resolve('./src/templates/testimonials.js'),
      context: {slug: testimonial.node.slug}
    })
  })
}
