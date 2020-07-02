import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import Thumbnail from "../components/thumbnail/thumbnail"
import styles from "./project.module.scss"
import TagList from "../components/tag-list/tag-list"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  // data.markdownRemark holds your post data
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { allMarkdownRemark } = data

  const getNextProject = () => {
    const allProjects = allMarkdownRemark.edges

    const thisNode = allProjects
    .find(edge => edge.node.frontmatter.slug === frontmatter.slug)

    const position = allProjects.indexOf(thisNode)
    if (position === allProjects.length - 1) {
      return allProjects[0]
    }
    return allProjects[position + 1]
  }

  const nextProject = getNextProject().node.frontmatter

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
        <div
          className={`container ${styles.content}`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <footer className="container">
          <div className={styles.nextLink}>
            Next Project:<br />
            <a href={`/work/${nextProject.slug}`}>{nextProject.title}</a>
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