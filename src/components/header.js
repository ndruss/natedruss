import React from "react"
import { Link } from "gatsby"

export default () => (
  <header>
    <h1><Link to="/">Nate Druss</Link></h1>
    <nav>
      <ul>
        <li><Link to="/">Work</Link></li>
        <li><Link to="/info">Info</Link></li>
      </ul>
    </nav>
  </header>
)
