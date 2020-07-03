import React from "react"
import Header from "./header"
import Footer from "../components/footer"

export default ({ children }) => (
  <div className="main-page-wrapper">
    <Header />
    <main className="main-content">
      {children}
    </main>
    <Footer />
  </div>
)
