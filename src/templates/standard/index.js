import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Head from '../../components/head'

const StandardPageTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout className={`page-${frontmatter.slug}`}>
      <Head title={frontmatter.title} />
      <div className="container">
        <h1 className="page-title">{frontmatter.title}</h1>
        <div className="body-text" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export default StandardPageTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        tags
        description
        thumbnailImg {
          fileName
          alt
        }
      }
    }
  }
`
