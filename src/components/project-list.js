import React from "react"

const ProjectLink = ({ post }) => (
  <li className="project-link">
    <a href={post.frontmatter.slug}>
      <img
        className="project-link__img"
        src={post.frontmatter.thumbnailImg}
      />
      <span className="project-link__title">
        {post.frontmatter.title}
      </span>
    </a>
  </li>
)

const ProjectList = ({ data }) => {
  const Posts = data
    .map(edge => <ProjectLink key={edge.node.id} post={edge.node} />)
    
  return <ul className="project-list">{Posts}</ul>
}

export default ProjectList