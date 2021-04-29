import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import Head from 'components/head'
import Intro from 'components/site-intro'
import ProjectList from 'components/project-list'

const HomePage = ({ data: { allMarkdownRemark } }) => (
  <div>
    <Head />
    <Intro />
    <Layout className="page-index">
      <div id="work" className="container">
        <ProjectList projects={allMarkdownRemark.edges} />
      </div>
    </Layout>
  </div>
)

export default HomePage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/(work)/" } }
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
              src {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    quality: 100
                  )
                }
              }
              alt
            }
          }
        }
      }
    }
  }
`
