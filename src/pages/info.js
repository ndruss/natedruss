import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

export default ({ data }) => (
  <Layout className="page-info">
    <Head title="Info" />
    <div className="container">
      <h1 className="page-title">About Me</h1>
      <div class="body-text">
        <p>
          My name is Nate Druss and I work as a Designer/Developer at <a className="nowrap" href="https://nsideas.com">Nesnadny + Schwartz</a>.
        </p>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
