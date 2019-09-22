import React from "react"
import Layout from "../components/layout"
import Intro from "../components/site-intro"

const Tile = () => (
  <div className="tile"></div>
)

export default () => (
  <>
    <Intro />
    <Layout>
      <div id="work" className="contain">
        <p>This is the main content of my home page. Here, you will find a list of recent projects and maybe some links.</p>

        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </div>
    </Layout>
  </>
)
