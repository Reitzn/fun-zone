import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignUp from "../sign-up/SignUp";
import Login from "../login/Login";
import LogOut from "../log-out/LogOut";

import { useAuth } from "../../hooks/useAuth";

export default function Header() {
  const currentUser = useAuth();

  return (
    <>
      {/* ToDo: Get mobile to collapse on selected tab */}
      <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Nick Reitz
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/resume">
                Resume
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact Me
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
              {/* {currentUser ? (
                <Navbar.Text>
                  Login in as: <a as={Link} to="/profile"href="#">{currentUser.email}</a>
                </Navbar.Text>
              ) : null} */}
              {currentUser ? <LogOut /> : null}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
