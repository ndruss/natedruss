import React from 'react'
import { Link } from 'gatsby'
import { homeLinkClick, hashLinkClick } from '../../utils'
import styles from './header.module.scss'
import Logo from '../../images/svg/nate-druss-logo.svg'

export default () => (
  <header className={styles.header}>
    <div className="container container--full">
      <div className={styles.logo}>
        <Link onClick={homeLinkClick} to="/">
          <Logo />
          <span className="screen-reader-text">Nate Druss</span>
        </Link>
      </div>
      <nav>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link onClick={hashLinkClick} to="/#work">
              Work
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/info">Info</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)
