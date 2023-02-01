import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import './header.css'

const Header = () => {
  return (
    <div>
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand> <Link to='/'>The online Shoes Store</Link> </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className=" m-auto mr-1"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
         
          <Link to="/Contact" >
            Contact
          </Link>
          <Link to="/Cart" >
          Cart
        </Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}

export default Header
