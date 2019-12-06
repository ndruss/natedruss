import React from "react"

const Tile = props => (
  <div className="tile">
    <h2>{props.title}</h2>
    <h3>{props.description}</h3>
    <div>{props.content}</div>
  </div>
)

export default () => (
  <div id="work" className="container">
    <p>This is the main content of my home page. Here, you will find a list of recent projects and maybe some links.</p>

    <Tile
      title="My Project"
      description="I am good"
      content="This is a project I worked really long and hard on. I hope you like it."
    />
    <Tile />
    <Tile />
    <Tile />
    <Tile />
  </div>
)
