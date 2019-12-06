import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Intro from "../components/site-intro"
import Work from "../components/work"

export default () => (
  <>
    <Head title="Home" />
    <Intro />
    <Layout>
      <Work />
    </Layout>
  </>
)
