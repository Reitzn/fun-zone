import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignUp from "../sign-up/SignUp";
import Login from "../login/Login";
import LogOut from "../log-out/LogOut";

import { useAuth } from "../../firebase";

export default function Header() {
  const currentUser = useAuth();

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Nick Reitz
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/resume">
                Resume
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              {currentUser ? (
              <Nav.Link as={Link} to="/profile">
                Profile
              </Nav.Link>
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
