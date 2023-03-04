import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

const MyNavbar = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand as={NavLink} to="/">Jason Trinidad</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Projects" id="basic-nav-dropdown">
            <NavDropdown.Item href="https://github.com/jason-trinidad/ProductiveWeb/blob/master/productive_web/README.md">Productive</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/projects/sscp">Aero</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/projects/reina">Reina</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNavbar;