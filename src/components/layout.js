import React from "react"
import Header from "../components/header/header"

export default ({ children }) => (
  <div className="main-page-wrapper">
    <Header />
    <main className="main-content">{children}</main>
  </div>
)
