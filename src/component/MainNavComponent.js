import React from 'react';
import { Component } from "react";
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

class MainNav extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" color="dark" variant="dark" expand="lg" className="col-12">
          <Navbar.Brand href="#home">Music Learner</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#songs">Songs</Nav.Link>
              <Nav.Link href="#wohoo">Woohoo</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default MainNav;