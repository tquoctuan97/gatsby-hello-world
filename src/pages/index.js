import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Post from "../components/Post"

const Home = () => (
  <main>
    <Header title="HomePage" />
    <div className="container">
      <div className="row col-xs-6 justify-content-center">
        <Post title="Hello World" excerpt="This is a exceprt" />
        <Post title="Hello World" excerpt="This is a exceprt" />
        <Post title="Hello World" excerpt="This is a exceprt" />
        <Post title="Hello World" excerpt="This is a exceprt" />
      </div>
    </div>
    <Footer />
  </main>
)

export default Home
