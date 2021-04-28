import React from 'react'
import { Link } from 'gatsby'
import { link, inner } from './project-link.module.scss'

const ProjectLink = ({ post, children }) => (
  <Link className={link} to={`/work/${post.frontmatter.slug}`}>
    <div className={inner}>{children}</div>
  </Link>
)

export default ProjectLink
