import React from "react"
import { graphql } from "gatsby"
import { useStaticQuery } from "gatsby"

export default function Thumbnail(props) {
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

  const post = props.frontmatter;
  
  if (post.thumbnailImg) {
    const path = post.slug + '/' + post.thumbnailImg.fileName
    const image = imgData.allFile.edges
    .find(file => file.node.relativePath === path)

    const imgClass = props.className ? props.className : 'thumbnail'

    return image ? (
      <img
        className={imgClass}
        src={image.node.publicURL}
        alt={post.thumbnailImg.alt}
      />
    ) : null
  }

  return null
}