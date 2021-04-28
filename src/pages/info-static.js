import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const InfoPage = () => (
  <Layout className="page-info">
    <Head title="Info" />
    <div className="container">
      <h1 className="page-title">About Me</h1>
      <div className="body-text">
        <p>
          My name is Nate Druss and I’m a Front-End Developer at{' '}
          <a href="https://www.progressive.com/">Progressive</a>. I enjoy
          crafting user-focused, digital experiences and bridging the gap
          between design and development. If you’d like to get in touch, send me
          email at <a href="mailto:nhdruss@gmail.com">nhdruss@gmail.com</a>.
        </p>
      </div>
    </div>
  </Layout>
)

export default InfoPage
