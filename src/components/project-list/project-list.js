import React from "react"
import { useStaticQuery } from "gatsby"
import styles from "./project-list.module.scss"

const ProjectLink = props => {
  const project = props.post.frontmatter;

  const Description = () => {
    return project.description ? (
      <h4 className={styles.description}>{project.description}</h4>
    ) : ''
  }

  const ThumbnailImg = () => {
    return props.thumbnail ? (
      <img
        className={styles.img}
        src={props.thumbnail.node.publicURL}
        alt={project.thumbnailImg.alt}
      />
    ) : ''
  }

  return (
    <li className={styles.listItem}>
      <a className={styles.link} href={`/work/${project.slug}`}>
        <div className={styles.inner}>
          <ThumbnailImg />
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

  const imgData = useStaticQuery(graphql `
    {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            publicURL
            absolutePath
            relativePath
          }
        }
      }
    }
  `)

  const getThumbnail = post => {
    if (post.thumbnailImg) {
      const path = post.slug + '/' + post.thumbnailImg.fileName
      return imgData.allFile.edges
      .find(file => file.node.relativePath === path)
    }
    return null
  }
  
  return (
    <ul className={styles.list}>
      {data.map(edge => 
        <ProjectLink
          key={edge.node.id}
          post={edge.node}
          thumbnail={getThumbnail(edge.node.frontmatter)}
        />
      )}
    </ul>
  )
}

export default ProjectList