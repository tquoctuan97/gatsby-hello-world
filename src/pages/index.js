import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Post from "../components/Post"

const Home = () => (
  <main>
    <Header title="HomePage" />
    <div className="container">
      <div className="row col-xs-6 justify-content-center">
        <Post />
      </div>
    </div>
    <Footer />
  </main>
)

export default Home
