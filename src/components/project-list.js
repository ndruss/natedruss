import React from "react"
import styles from "./project-list.module.scss"

const ProjectLink = ({ post }) => {

  const project = post.frontmatter;

  const Description = () => {
    return project.description ? (
      <h4 className={styles.description}>{project.description}</h4>
    ) : ''
  }

  return (
    <li className={styles.listItem}>
      <a className={styles.link} href={project.slug}>
        <div className={styles.inner}>
          <img
            className={styles.img}
            src={project.thumbnailImg.url}
            alt={project.thumbnailImg.alt}
          />
          <div className={styles.info}>
            <h2 className={styles.title}>{project.title}</h2>
            <Description />
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