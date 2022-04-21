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
          <Navbar.Brand href="/">
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
              <Nav.Link
                href="https://www.facebook.com/Devdahamedicalcollege"
                target="_blank"
              >
                <FaFacebook />
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                href="https://www.google.com/search?q=devdaha+medical+college&source=lnms&tbm=isch&sa=X&ved=2ahUKEwig05-nkKT3AhWI7XMBHZXbCg4Q_AUoAXoECAIQAw&biw=1366&bih=661&dpr=1"
                target="_blank"
              >
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
