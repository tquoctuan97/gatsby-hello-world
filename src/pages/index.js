import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Post from "../components/Post"

const Home = () => (
  <div>
    <Header title="HomePage" />
    <div className="container">
      <Post />
    </div>
    <Footer />
  </div>
)

export default Home
