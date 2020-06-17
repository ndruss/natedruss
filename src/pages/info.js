import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

export default ({ data }) => (
  <Layout>
    <Head title="Info" />
    <div className="container">
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        My name is Nate Druss and I am a multi-disciplinary designer, currently focused on digital media. My passion lies at the intersection of creativity and technology. I'm a big fan of clean code and user-friendly design. If You'd like to get in touch, contact me at nhdruss@gmail.com.
      </p>
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
