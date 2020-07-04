import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Head from "../../components/head"
import Thumbnail from "../../components/thumbnail"
import TagList from "../../components/tag-list"
import ProjectLink from "../../components/project-link";
import styles from "./project.module.scss"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { allMarkdownRemark } = data

  const nextProject = getNextProject(allMarkdownRemark, frontmatter)

  return (
    <Layout>
      <Head title={frontmatter.title} />
      <article className={styles.article}>

        <header className={`container ${styles.header}`}>
          <h1>{frontmatter.title}</h1>
          <p className={styles.description}>{frontmatter.description}</p>
          <TagList tags={frontmatter.tags}/>
        </header>

        <div className="container--wide">
          <Thumbnail
            frontmatter={frontmatter}
            className={styles.thumbnail}
          />
        </div>

        <div class="container">
          <div
            className={`body-text ${styles.content}`}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>

        <footer className="container flex-center">
          <div className={styles.nextProjectLink}>
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

function getNextProject(allMarkdownRemark, frontmatter) {
  const allProjects = allMarkdownRemark.edges

  const thisNode = allProjects
  .find(edge => edge.node.frontmatter.slug === frontmatter.slug)

  const position = allProjects.indexOf(thisNode)

  if (position === allProjects.length - 1) {
    return allProjects[0].node
  }

  return allProjects[position + 1].node
}
