import React from "react"
import Thumbnail from "../thumbnail"
import styles from "./project-list.module.scss"

const ProjectLink = props => {
  const project = props.post.frontmatter;

  const Description = () => {
    const description = project.shortDescription
    return description ? (
      <h4 className={styles.description}>{description}</h4>
    ) : ''
  }

  return (
    <li className={styles.listItem}>
      <a className={styles.link} href={`/work/${project.slug}`}>
        <div className={styles.inner}>
          <Thumbnail frontmatter={project} />
          <div className={styles.info}>
            <h2 className={styles.title}>{project.title}</h2>
            <Description />
          </div>
        </div>
      </a>
    </li>
  )
}

const ProjectList = ({ data }) => (
  <ul className={styles.list}>
    {data.map(edge => 
      <ProjectLink key={edge.node.id} post={edge.node} />
    )}
  </ul>
)

export default ProjectList