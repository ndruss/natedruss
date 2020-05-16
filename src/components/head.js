import React from "react"
import { Helmet } from "react-helmet"

export default props => (
  <Helmet>
    <title>{props.title} | Nate Druss</title>
    <link rel="canonical" href="http://mysite.com/example" />
    <link
      href="https://fonts.googleapis.com/css?family=Source+Code+Pro:300,300i,500,500i,700,700i&display=swap"
      rel="stylesheet"
    />
  </Helmet>
)
