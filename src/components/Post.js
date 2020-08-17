import React from "react"
import { Card, Button } from "react-bootstrap"

const Post = () => (
  <div className="pt-4">
    <Card>
      <Card.Img variant="top" src="gatsby.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </div>
)

export default Post
