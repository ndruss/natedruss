// ProjectLink

import React from 'react'
import styles from './project-link.module.scss'

export default props => {
  const project = props.post.frontmatter
  return (
    <a className={styles.link} href={`/work/${project.slug}`}>
      <div className={styles.inner}>{props.children}</div>
    </a>
  )
}
