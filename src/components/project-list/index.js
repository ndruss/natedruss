import React from 'react'
import ProjectLink from '../project-link'
import Thumbnail from '../thumbnail'
import { list, linkTitle, linkSubtitle } from './project-list.module.scss'

const ProjectList = ({ projects }) => (
  <ul className={list}>
    {projects.map(edge => (
      <li key={edge.node.id}>
        <ProjectLink post={edge.node}>
          <Thumbnail frontmatter={edge.node.frontmatter} />
          <h2 className={linkTitle}>{edge.node.frontmatter.title}</h2>
          <h4 className={linkSubtitle}>
            {edge.node.frontmatter.shortDescription}
          </h4>
        </ProjectLink>
      </li>
    ))}
  </ul>
)

export default ProjectList
