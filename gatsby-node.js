exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

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
            parent {
              ... on File {
                relativeDirectory
              }
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

  const templates = {
    _standard: 'standard',
    work: 'project',
  }

  const {
    data: {
      allMarkdownRemark: { edges: markdownPages },
    },
  } = result

  markdownPages.forEach(({ node }) => {
    const {
      frontmatter: { slug },
      parent: { relativeDirectory: dir },
    } = node

    const path = dir === '_standard' ? `/${slug}` : `/${dir}/${slug}`

    createPage({
      path,
      component: require.resolve(`./src/templates/${templates[dir]}`),
      context: {
        // additional data can be passed via context
        slug,
        relativePath: path,
      },
    })
  })
}
