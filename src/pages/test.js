import React from "react"
import { navigate } from "gatsby"

const Test = () => (
  <main>
    <h1>Hello Test</h1>
    <button onClick={() => navigate("/")}>Back to home</button>
  </main>
)

export default Test
