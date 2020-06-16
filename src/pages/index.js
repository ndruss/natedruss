import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import Intro from "../components/site-intro"
import PostLink from "../components/post-link"

export default ({
  data: {
    allMarkdownRemark: { edges },
  }
}) => {
  const Posts = edges
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <>
      <Head title="Home" />
      <Intro />
      <Layout>
        <div id="work" className="container">
          <ul>{Posts}</ul>
        </div>
      </Layout>
    </>
  )
}

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
          }
        }
      }
    }
  }
`
