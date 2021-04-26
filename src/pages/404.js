import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

export default () => (
  <Layout className="page-404">
    <Head title="Page Not Found" />
    <div className="container">
      <h1 className="page-title">404</h1>
      <div className="body-text">
        <p>The page you are looking for does not exist.</p>
        <p>
          <a href="/">Return to the homepage</a>
        </p>
      </div>
    </div>
  </Layout>
)
