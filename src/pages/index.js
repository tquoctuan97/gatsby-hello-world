import React from "react"
import MainLayout from "../layouts/MainLayout"
import Post from "../components/Post"
import { graphql } from "gatsby"

const Home = ({ data }) => {
  return (
    <MainLayout className="justify-content-center">
      {data.allMarkdownRemark.nodes.map(node => (
        <Post
          title={node.frontmatter.title}
          excerpt={node.excerpt}
          image={node.frontmatter.image}
          key={node.id}
        />
      ))}
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
