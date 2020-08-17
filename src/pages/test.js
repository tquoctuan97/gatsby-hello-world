import React from "react"
import { navigate } from "gatsby"
import Header from "../components/Header"

const Test = () => (
  <main>
    <Header title="TestPage"></Header>
    <h1>Hello Test</h1>
    <button onClick={() => navigate("/")}>Back to home</button>
  </main>
)

export default Test
