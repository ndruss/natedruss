// ProjectLink

import React from "react"
import Thumbnail from "../thumbnail"
import styles from "./project-link.module.scss"

export default props => {
  const project = props.post.frontmatter;

  const Description = () => {
    const description = project.shortDescription
    return description ? (
      <h4 className={styles.description}>{description}</h4>
    ) : ''
  }

  return (
    <li className={styles.listItem}>
      <a className={styles.link} href={`/work/${project.slug}`}>
        <div className={styles.inner}>
          <Thumbnail frontmatter={project} />
          <h2 className={styles.title}>{project.title}</h2>
          <Description />
        </div>
      </a>
    </li>
  )
}