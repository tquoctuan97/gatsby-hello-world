import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Form, Button } from "react-bootstrap"

const Contact = () => (
  <main>
    <Header title="HomePage" />
    <div className="container">
      <div className="row col-lg-12 justify-content-center pt-4">
        <h1>Contact Us</h1>
      </div>
      <div>
        <div>
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
      </div>
    </div>
    <Footer />
  </main>
)

export default Contact
