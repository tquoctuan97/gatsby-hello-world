import React from "react"
import MainLayout from "../layouts/MainLayout"
import Post from "../components/Post"

const Home = () => (
  <MainLayout className="justify-content-center">
    <Post title="Hello World" excerpt="This is a exceprt" />
    <Post title="Hello World" excerpt="This is a exceprt" />
    <Post title="Hello World" excerpt="This is a exceprt" />
    <Post title="Hello World" excerpt="This is a exceprt" />
  </MainLayout>
)

export default Home
