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

  const post = props.post.frontmatter;
  
  if (post.thumbnailImg) {
    const path = post.slug + '/' + post.thumbnailImg.fileName
    const image = imgData.allFile.edges
    .find(file => file.node.relativePath === path)

    return image ? (
      <img
        className="thumbnail"
        src={image.node.publicURL}
        alt={post.thumbnailImg.alt}
      />
    ) : null
  }

  return null
}