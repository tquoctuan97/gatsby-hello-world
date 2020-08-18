import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const MainLayout = props => (
  <main>
    <Header title="HomePage" />
    <div className="container">
      <div className={`row p-4 ${props.className}`}>{props.children}</div>
    </div>
    <Footer />
  </main>
)

export default MainLayout
