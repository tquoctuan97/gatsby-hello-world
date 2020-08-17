import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Home = () => (
  <main>
    <Header title="HomePage"></Header>
    <div>
      <h1>Hello This is home page</h1>
    </div>
    <Link to="/test">Go to Test Page</Link>
    <Footer></Footer>
  </main>
)

export default Home
