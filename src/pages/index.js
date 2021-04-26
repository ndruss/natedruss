// Home

import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import Intro from '../components/site-intro'
import ProjectList from '../components/project-list'

export default ({ data }) => {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark
  return (
    <>
      <Head />
      <Intro />
      <Layout className="page-index">
        <div id="work" className="container">
          <ProjectList data={edges} />
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
          id
          frontmatter {
            title
            date
            slug
            shortDescription
            thumbnailImg {
              fileName
              alt
            }
          }
        }
      }
    }
  }
`
