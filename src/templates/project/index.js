import React from 'react'
import { graphql } from 'gatsby'
import { getNextProject } from '../../utils'
import Layout from '../../components/layout'
import Head from '../../components/head'
import Thumbnail from '../../components/thumbnail'
import TagList from '../../components/tag-list'
import ProjectLink from '../../components/project-link'
import {
  header,
  description,
  thumbnail,
  content,
  nextProjectLink,
} from './project.module.scss'

const ProjectTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { allMarkdownRemark } = data

  const nextProject = getNextProject(allMarkdownRemark, frontmatter)

  return (
    <Layout className={`page-${frontmatter.slug}`}>
      <Head title={frontmatter.title} />
      <article>
        <header className={`container ${header}`}>
          <h1 className="page-title">{frontmatter.title}</h1>
          <p className={description}>{frontmatter.description}</p>
          <TagList tags={frontmatter.tags} />
        </header>

        <div className="container--wide">
          <Thumbnail frontmatter={frontmatter} className={thumbnail} />
        </div>

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
          fileName
          alt
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
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
