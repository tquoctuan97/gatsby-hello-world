import React from "react"
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap"
import { Link } from "gatsby"

export default props => (
  <Navbar bg="light" expand="md">
    <Navbar.Brand>
      <Link to="/">Gatsby-Bootstrap</Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link>
          <Link to="/">Home</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/about">About Us</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/contact">Contact Us</Link>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
