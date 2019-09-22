import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.css"

export default () => (
  <header className={styles.header}>
    <h1><Link to="/">Nate Druss</Link></h1>
    <nav>
      <ul>
        <li><Link to="/">Work</Link></li>
        <li><Link to="/info">Info</Link></li>
      </ul>
    </nav>
  </header>
)
