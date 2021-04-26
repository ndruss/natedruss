import React from 'react'
import { Link } from 'gatsby'
import styles from './project-link.module.scss'

const ProjectLink = ({ post, children }) => (
  <Link className={styles.link} to={`/work/${post.frontmatter.slug}`}>
    <div className={styles.inner}>{children}</div>
  </Link>
)

export default ProjectLink
