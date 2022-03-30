import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignUp from "./sign-up/SignUp";
import Login from "./login/Login";
import LogOut from "./log-out/LogOut";

import { useAuth } from "../../hooks/useAuth";

export default function Header() {
  const currentUser = useAuth();

  console.log(currentUser);

  return (
    <>
      {/* ToDo: Get mobile to collapse on selected buttons (Loging in / out) */}
      <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Nick Reitz
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link eventKey="1" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link eventKey="2" as={Link} to="/resume">
                Resume
              </Nav.Link>
              <Nav.Link eventKey="3" as={Link} to="/contact">
                Contact Me
              </Nav.Link>
              {currentUser ? (
                <>
                  <Nav.Link eventKey="4" as={Link} to="/profile">
                    Profile
                  </Nav.Link>
                  <Nav.Link eventKey="5" as={Link} to="/users">
                    Users
                  </Nav.Link>
                </>
              ) : null}
            </Nav>
            <Nav className="justify-content-end">
              {!currentUser ? <Login /> : null}
              {!currentUser ? <SignUp /> : null}
              {currentUser ? <LogOut /> : null}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
