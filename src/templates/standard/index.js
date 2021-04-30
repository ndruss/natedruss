import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/layout'

const StandardPageTemplate = ({
  data: {
    markdownRemark: {
      frontmatter: { slug, title, description },
      html,
    },
  },
}) => (
  <Layout title={title} description={description} className={`page-${slug}`}>
    <div className="container">
      <div className="body-text" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  </Layout>
)

export default StandardPageTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        description
      }
    }
  }
`
