import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.css"

const ListLink = props => (
  <li className={styles.listItem}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default () => (
  <header className={styles.header}>
    <div className="container container--wide">
      <div className={styles.logo}>
        <Link to="/">
          <span className="screen-reader-text">Nate Druss</span>
        </Link>
      </div>
      <nav>
        <ul className={styles.list}>
          <ListLink to="/#work">Work</ListLink>
          <ListLink to="/info">Info</ListLink>
        </ul>
      </nav>
    </div>
  </header>
)