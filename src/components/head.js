import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { graphql, useStaticQuery } from 'gatsby'

const Head = ({ title, description, image }) => {
  const { site } = useStaticQuery(query)
  const {
    siteTitle,
    siteDescription,
    siteUrl,
    defaultImage,
    fontUrl,
  } = site.siteMetadata

  const { pathname } = useLocation()

  const seo = {
    title: (title ? `${title} | ` : '') + siteTitle,
    description: description || siteDescription,
    url: siteUrl + pathname,
    image: siteUrl + (image || defaultImage),
  }

  return (
    <Helmet title={seo.title} htmlAttributes={{ lang: 'en' }}>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.url} />
      <meta name="image" content={seo.image} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2d3033" />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#ffffff" />

      <link href={fontUrl} rel="stylesheet" />
    </Helmet>
  )
}

export default Head

const query = graphql`
  query HEAD {
    site {
      siteMetadata {
        siteTitle: title
        siteDescription: description
        siteUrl: url
        defaultImage: image
        fontUrl
      }
    }
  }
`
