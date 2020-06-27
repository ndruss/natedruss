import React from "react"
import { useStaticQuery } from "gatsby"
import styles from "./project-list.module.scss"

const ProjectLink = ({ post }) => {
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
  const project = post.frontmatter;

  const Description = () => {
    return project.description ? (
      <h4 className={styles.description}>{project.description}</h4>
    ) : ''
  }

  const ThumbnailImg = () => {
    if (project.thumbnailImg) {
      const image = imgData.allFile.edges
      .find(file => file.node.relativePath === project.thumbnailImg.fileName)

      console.log(image.node)
      return (
        <img
          className={styles.img}
          src={image.node.publicURL}
          alt={project.thumbnailImg.alt}
        />
      )
    }
    return ''
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
  
  const Posts = data
  .map(edge => <ProjectLink key={edge.node.id} post={edge.node} />)
    
  return <ul className={styles.list}>{Posts}</ul>
}

export default ProjectList