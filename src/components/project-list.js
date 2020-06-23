import React from "react"
import styles from "./project-list.module.css"

const ProjectLink = ({ post }) => {
  return (
    <li className={styles.listItem}>
      <a className={styles.link} href={post.frontmatter.slug}>
        <div className={styles.inner}>
          <img
            className={styles.img}
            src={post.frontmatter.thumbnailImg.url}
            alt={post.frontmatter.thumbnailImg.alt}
          />
          <div className={styles.info}>
            <h2 className={styles.title}>{post.frontmatter.title}</h2>
            <h4 className={styles.description}>A cool project</h4>
          </div>
        </div>
      </a>
    </li>
  )
}

const ProjectList = ({ data }) => {
  const Posts = data
  .map(edge => <ProjectLink key={edge.node.id} post={edge.node} />)
    
  return <ul className={styles.list}>{Posts}</ul>
}

export default ProjectList