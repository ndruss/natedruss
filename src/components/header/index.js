import React from 'react'
import { Link } from 'gatsby'
import { homeLinkClick, hashLinkClick } from 'utils'
import Logo from 'images/svg/nate-druss-logo.svg'
import { header, logo, list, listItem } from './header.module.scss'

const Header = () => (
  <header className={header}>
    <div className="container container--full">
      <div className={logo}>
        <Link onClick={homeLinkClick} to="/">
          <Logo />
          <span className="screen-reader-text">Nate Druss</span>
        </Link>
      </div>
      <nav>
        <ul className={list}>
          <li className={listItem}>
            <Link onClick={hashLinkClick} to="/#work">
              Work
            </Link>
          </li>
          <li className={listItem}>
            <Link to="/info">Info</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
