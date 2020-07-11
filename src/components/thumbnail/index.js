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
            name
          }
        }
      }
    }
  `)

  const post = props.frontmatter;
  
  if (post.thumbnailImg) {
    const path = post.slug + "/" + post.thumbnailImg.fileName

    const image = imgData.allFile.edges
    .find(file => file.node.relativePath === path)

    const highRes = imgData.allFile.edges
    .find(file => file.node.name === image.node.name + "@2x")

    if (image) {

      let srcSet = image.node.publicURL + " 1x"
      if (highRes){
        srcSet += `, ${highRes.node.publicURL} 2x`
      }

      return (
        <img
          className={props.className ? props.className : "thumbnail"}
          srcSet={srcSet}
          src={image.node.publicURL}
          alt={post.thumbnailImg.alt}
        />
      )

    }  
  }

  return null
}