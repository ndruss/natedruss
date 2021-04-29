import React from 'react'
import ProjectLink from 'components/project-link'
import Thumbnail from 'components/thumbnail'
import { list, linkTitle, linkSubtitle } from './project-list.module.scss'

const ProjectList = ({ projects }) => (
  <ul className={list}>
    {projects.map(({ node }) => (
      <li key={node.id}>
        <ProjectLink post={node}>
          {node.frontmatter && <Thumbnail frontmatter={node.frontmatter} />}
          <h2 className={linkTitle}>{node.frontmatter.title}</h2>
          <h4 className={linkSubtitle}>{node.frontmatter.shortDescription}</h4>
        </ProjectLink>
      </li>
    ))}
  </ul>
)

export default ProjectList
