import React from 'react'
import Head from 'components/head'
import Header from 'components/header'
import Footer from 'components/footer'

const Layout = ({ title, className, children }) => (
  <div className={className}>
    <Head title={title} />
    <Header />
    <main className="main-content">{children}</main>
    <Footer />
  </div>
)

export default Layout
