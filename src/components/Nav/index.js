import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

import Navbar from "react-bootstrap/Navbar";
const Topnav = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <div className="navheader__logo">
              <img
                src={Logo}
                alt="logo"
                className="logo"
                width="100px"
                height="100px"
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features"></Nav.Link>
              <Nav.Link href="#pricing"></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                href="/"
                //   activeClassName="active"
                className="nav-item"
              >
                Home
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                as={NavLink}
                to="/about"
                // activeClassName="active"
                className="nav-item"
              >
                About
              </Nav.Link>
              <Nav.Link
                eventKey={3}
                as={NavLink}
                to="/services"
                // activeClassName="active"
                className="nav-item"
              >
                Services
              </Nav.Link>
              <Nav.Link
                eventKey={4}
                as={NavLink}
                to="/academic"
                // activeClassName="active"
                className="nav-item"
              >
                Academic
              </Nav.Link>
              <Nav.Link
                eventKey={5}
                as={NavLink}
                to="/media"
                // activeClassName="active"
                className="nav-item"
              >
                Media
              </Nav.Link>
              <Nav.Link
                eventKey={6}
                as={NavLink}
                to="/notice"
                // activeClassName="active"
                className="nav-item"
              >
                Notice
              </Nav.Link>
              <Nav.Link
                eventKey={6}
                as={NavLink}
                to="/contact"
                // activeClassName="active"
                className="nav-link nav-item"
              >
                Contact
              </Nav.Link>

              {/* <NavLink
                // activeClassName="active"
                to="/contact"
                className="nav-link nav-item"
                style={(isActive) => ({
                  color: isActive ? "black" : "blue",
                })}
              >
                Contact
              </NavLink> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Topnav;
