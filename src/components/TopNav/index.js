import React from "react";
import { Container, Nav } from "react-bootstrap";
import { FaFacebook, FaGooglePlus, FaTwitter } from "react-icons/fa";

import Navbar from "react-bootstrap/Navbar";
const Topnav = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ backgroundColor: "#046795" }}
      >
        <Container>
          <Navbar.Brand href="#home">
            Devdaha Medical College | Bhaluhi, Rupandehi
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="nav-tooggle"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features"></Nav.Link>
              <Nav.Link href="#pricing"></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <FaFacebook />
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <FaGooglePlus />
              </Nav.Link>
              <Nav.Link eventKey={3} href="#memes">
                <FaTwitter />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Topnav;
