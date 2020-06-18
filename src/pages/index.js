import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import Intro from "../components/site-intro"
import ProjectList from "../components/project-list"

export default ({
  data: {
    allMarkdownRemark: { edges },
  }
}) => (
  <>
    <Head title="Home" />
    <Intro />
    <Layout>
      <div id="work" className="container">
        <ProjectList data={edges} />
      </div>
    </Layout>
  </>
)

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            slug
            thumbnailImg
            tags
          }
        }
      }
    }
  }
`
