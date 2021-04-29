import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/layout'

const StandardPageTemplate = ({
  data: {
    markdownRemark: { frontmatter, html },
  },
}) => (
  <Layout title={frontmatter.title} className={`page-${frontmatter.slug}`}>
    <div className="container">
      <h1 className="page-title">{frontmatter.title}</h1>
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
      }
    }
  }
`
