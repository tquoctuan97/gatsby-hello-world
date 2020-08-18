import React from "react"
import { Card, Button } from "react-bootstrap"
import { Link } from "gatsby"

const Post = props => (
  <div className="pb-4">
    <Card>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.excerpt}</Card.Text>
        <Button variant="primary" as={Link} to={props.readMore}>
          Read More
        </Button>
      </Card.Body>
    </Card>
  </div>
)

export default Post
