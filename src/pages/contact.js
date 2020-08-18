import React from "react"
import MainLayout from "../layouts/MainLayout"
import { Form, Button } from "react-bootstrap"

const Contact = () => (
  <MainLayout className="justify-content-center">
    <div className="col-8">
      <h1 className="text-center">Contact Us</h1>
      <Form>
        <Form.Group controlId="contactForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="contactForm.ControlInput1">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Subject..." />
        </Form.Group>
        <Form.Group controlId="contactForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Form.Group controlId="contactForm.Submit">
          <Button>Submit</Button>
        </Form.Group>
      </Form>
    </div>
  </MainLayout>
)

export default Contact
