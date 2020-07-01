import React from "react"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"

export default ({ children }) => (
  <div className="main-page-wrapper">
    <Header />
    <main className="main-content">
      {children}
    </main>
    <Footer />
  </div>
)
