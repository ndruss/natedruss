// ProjectList

import React from "react"
import ProjectLink from "../project-link";
import Thumbnail from "../thumbnail"
import styles from "./project-list.module.scss"

export default ({ data }) => (
  <ul className={styles.list}>
    {data.map(edge => (
      <li className={styles.listItem}>
        <ProjectLink key={edge.node.id} post={edge.node}>
          <Thumbnail frontmatter={edge.node.frontmatter} />
          <h2>{edge.node.frontmatter.title}</h2>
          <h4>{edge.node.frontmatter.shortDescription}</h4>
        </ProjectLink>
      </li>
    ))}
  </ul>
)
