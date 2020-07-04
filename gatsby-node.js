exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const projectTemplate = require.resolve(`./src/templates/project`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/work/${node.frontmatter.slug}`,
      component: projectTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
        relativePath: `/work/${node.frontmatter.slug}`,
      },
    })
  })
}
