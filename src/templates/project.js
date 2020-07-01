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
          <Thumbnail frontmatter={frontmatter} />
        </div>
        <div
          className={`container ${styles.content}`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
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
  }
`