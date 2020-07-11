import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"
import Logo from "../../images/svg/nate-druss-logo.svg"

const ListLink = props => {
  const handleClick = e => {
    e.preventDefault()

    if (e.target.hash && document.querySelector(e.target.hash)) {

      window.history.pushState({content: "work"}, "", e.target.hash)

      document.querySelector(e.target.hash)
      .scrollIntoView({ behavior: "smooth" })

    } else {
      window.location = e.target.href
    }
  }

  return(
    <li className={styles.listItem}>
      <Link onClick={handleClick} to={props.to}>
        {props.children}
      </Link>
    </li>
  )
}

export default () => (
  <header className={styles.header}>
    <div className="container container--full">
      <div className={styles.logo}>
        <Link to="/">
          <Logo />
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
