import React from 'react'
import { Helmet } from 'react-helmet'

const siteDescription = 'A Front-End Developer in Cleveland, Ohio'

const fontUrl =
  'https://fonts.googleapis.com/css?family=Source+Code+Pro:300,300i,500,500i,600,600i&display=swap'

const Head = ({ title, description }) => (
  <Helmet>
    <title>Nate Druss{title ? ` | ${title}` : ''}</title>
    <meta name="description" content={description || siteDescription} />
    <link rel="canonical" href="https://natedruss.com" />
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

export default Head
