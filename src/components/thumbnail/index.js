import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Thumbnail = ({
  frontmatter: { thumbnailImg },
  className = 'thumbnail',
  loading = 'lazy',
}) => {
  const image = getImage(thumbnailImg.src)
  return (
    <GatsbyImage
      className={className}
      image={image}
      alt={thumbnailImg.alt}
      loading={loading}
    />
  )
}

export default Thumbnail
