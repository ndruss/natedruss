import React from "react"
import { Link } from "gatsby"

const ProjectLink = ({ post }) => (
  <li>
    <Link to={post.frontmatter.slug}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </li>
)

export default ProjectLink