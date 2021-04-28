import React from 'react'
import { intro, textBlock } from './site-intro.module.scss'

const SiteIntro = () => (
  <section className={intro}>
    <header className="container container--wide">
      <div className={textBlock}>
        <h1>Hi, I’m Nate</h1>
        <h2>a Front-End Developer in Cleveland,&nbsp;Ohio.</h2>
      </div>
    </header>
  </section>
)

export default SiteIntro
