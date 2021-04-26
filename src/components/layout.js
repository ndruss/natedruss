import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

export default props => (
  <div className={props.className}>
    <Header />
    <main className="main-content">{props.children}</main>
    <Footer />
  </div>
)
