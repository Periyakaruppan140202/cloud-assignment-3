import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navbars = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <Nav.Link className="nav-link" href="/">
              <Navbar.Brand href="#home">Book Finder</Navbar.Brand>
            </Nav.Link>
          </Link>
          <Nav className="me-auto">
            <Link to="/add">
              <Nav.Link className="nav-link" href="/add">
                Add
              </Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
