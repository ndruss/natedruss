import React from 'react'
import ProjectLink from '../project-link'
import Thumbnail from '../thumbnail'
import styles from './project-list.module.scss'

const ProjectList = ({ data }) => (
  <ul className={styles.list}>
    {data.map(edge => (
      <li key={edge.node.id} className={styles.listItem}>
        <ProjectLink post={edge.node}>
          <Thumbnail frontmatter={edge.node.frontmatter} />
          <h2>{edge.node.frontmatter.title}</h2>
          <h4>{edge.node.frontmatter.shortDescription}</h4>
        </ProjectLink>
      </li>
    ))}
  </ul>
)

export default ProjectList
