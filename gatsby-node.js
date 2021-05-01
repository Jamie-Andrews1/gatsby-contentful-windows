const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const {data} = await graphql(`
  query MyQuery {
    allContentfulProducts {
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
  }).catch(error => console.log('error with contentfull data', error))
}