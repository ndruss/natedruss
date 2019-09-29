import React from "react";
import {Helmet} from "react-helmet";

export default props => (
  <Helmet>
    <title>{props.title} | Nate Druss</title>
    <link rel="canonical" href="http://mysite.com/example" />
  </Helmet>
)
