import React from "react"
import MainLayout from "../layouts/MainLayout"
import Post from "../components/Post"
import { graphql } from "gatsby"

const Home = ({ data }) => {
  return (
    <MainLayout className="justify-content-center">
      {data.allWordpressPost.nodes.map(node => (
        <Post
          title={node.title}
          excerpt={node.excerpt}
          image={node.featured_media.source_url}
          key={node.id}
          readMore={node.featured_media.source_url}
        />
      ))}
    </MainLayout>
  )
}

export default Home


export const query = graphql`
  {
    allWordpressPost {
      nodes {
        id
        slug
        title
        content
        excerpt
        featured_media {
          source_url
        }
      }
    }
  }
`
