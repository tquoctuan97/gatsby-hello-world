import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"

const PostLayout = ({ data }) => {
  const post = data.wordpressPost
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row justify-content-md-center pt-5">
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PostLayout

export const query = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      title
      content
    }
  }
`
