import React from "react"
import { navigate } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Test = () => (
  <main>
    <Header title="TestPage" />
    <h1>Hello Test</h1>
    <button onClick={() => navigate("/")}>Back to home</button>
    <Footer />
  </main>
)

export default Test
