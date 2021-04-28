import React from 'react'
import { list, iconLink } from './contact-link-list.module.scss'

const ContactLinkList = ({ links }) => (
  <ul className={list}>
    {links.map(link => (
      <li key={link.name}>
        <a href={link.url} className={iconLink}>
          <link.icon />
          <span className="screen-reader-text">{link.name}</span>
        </a>
      </li>
    ))}
  </ul>
)

export default ContactLinkList
