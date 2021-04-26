import React from "react"
import styles from "./contact-link-list.module.scss"

const ContactLinkList = ({ links }) => (
  <ul className={styles.list}>
    {links.map(link => (
      <li key={link.name}>
        <a href={link.url} className={styles.iconLink}>
          <link.icon />
          <span className="screen-reader-text">{link.name}</span>
        </a>
      </li>
    ))}
  </ul>    
)

export default ContactLinkList
