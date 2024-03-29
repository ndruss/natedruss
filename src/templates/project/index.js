import React from 'react'
import { graphql } from 'gatsby'
import { getSrcSet } from 'gatsby-plugin-image'
import { getMetaImage, getNextProject } from 'utils'
import Layout from 'components/layout'
import Thumbnail from 'components/thumbnail'
import TagList from 'components/tag-list'
import ProjectLink from 'components/project-link'
import {
  header,
  description,
  thumbnail,
  content,
  nextProjectLink,
} from './project.module.scss'

const ProjectTemplate = ({
  data: {
    markdownRemark: { frontmatter, html },
    allMarkdownRemark,
  },
}) => {
  const nextProject = getNextProject(allMarkdownRemark, frontmatter)
  const thumbnailSrcSet = getSrcSet(frontmatter.thumbnailImg.src)
  const metaImage = getMetaImage(thumbnailSrcSet)

  return (
    <Layout
      title={frontmatter.title}
      description={frontmatter.description}
      image={metaImage}
      className={`page-${frontmatter.slug}`}
    >
      <article>
        <header className={`container ${header}`}>
          <h1 className="page-title">{frontmatter.title}</h1>
          <p className={description}>{frontmatter.description}</p>
          <TagList tags={frontmatter.tags} />
        </header>

        {frontmatter.thumbnailImg && (
          <div className="container--wide">
            <Thumbnail
              frontmatter={frontmatter}
              className={thumbnail}
              loading="eager"
            />
          </div>
        )}

        <div className="container">
          <div
            className={`body-text ${content}`}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>

        <footer className="container flex-center">
          <div className={nextProjectLink}>
            <ProjectLink post={nextProject}>
              <h4>Next Project</h4>
              <h2>{nextProject.frontmatter.title}</h2>
            </ProjectLink>
          </div>
        </footer>
      </article>
    </Layout>
  )
}

export default ProjectTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        tags
        description
        thumbnailImg {
          src {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                quality: 100
              )
            }
          }
          alt
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/(work)/" } }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            slug
          }
        }
      }
    }
  }
`
