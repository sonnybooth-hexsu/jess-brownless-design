const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/Blog/blog.jsx`)
  const productPostTemplate = path.resolve(`src/templates/Product/product.jsx`)
  const blogResults = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { layout: { eq: "blog" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              layout
              path
              category
              id
            }
          }
        }
      }
    }
  `)
  const productResults = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { layout: { eq: "product" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              layout
              path
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (blogResults.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  if (productResults.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  blogResults.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: { category: node.frontmatter.category, id: node.frontmatter.id }, // additional data can be passed via context
    })
  })
  productResults.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: productPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  deletePage(page)
  // You can access the variable "house" in your page queries now
  createPage({
    ...page,
    context: {
      ...page.context,
    },
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: { react: path.resolve("./node_modules/react") },
    },
  })
}
