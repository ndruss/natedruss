import React from "react"
import Layout from "../components/layout"
import Intro from "../components/site-intro"

export default () => (
  <>
    <Intro />
    <Layout>
      <div id="work" className="contain">
        <p>This is the main content of my home page. Here, you will find a list of recent projects and maybe some links.</p>
      </div>
    </Layout>
  </>
)
