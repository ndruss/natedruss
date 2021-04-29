import React from 'react'
import { Link } from 'gatsby'
import Layout from 'components/layout'

const NotFoundPage = () => (
  <Layout title="Page Not Found" className="page-404">
    <div className="container">
      <h1 className="page-title">404</h1>
      <div className="body-text">
        <p>The page you are looking for does not exist.</p>
        <p>
          <Link to="/">Return to the homepage</Link>
        </p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
