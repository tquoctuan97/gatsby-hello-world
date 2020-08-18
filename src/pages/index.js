import React from "react"
import MainLayout from "../layouts/MainLayout"
import Post from "../components/Post"
import { graphql } from "gatsby"

const Home = ({ data }) => {
  console.log(data)
  return (
    <MainLayout className="justify-content-center">
      <Post title="Hello World" excerpt="This is a exceprt" />
      <Post title="Hello World" excerpt="This is a exceprt" />
      <Post title="Hello World" excerpt="This is a exceprt" />
      <Post title="Hello World" excerpt="This is a exceprt" />
    </MainLayout>
  )
}

export default Home

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          date
          keywords
          image
        }
        html
        excerpt
      }
    }
  }
`
