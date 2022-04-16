import React, { useState, useRef } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import { login } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

export default function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setError("");
  };
  const handleShow = () => setShow(true);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  async function handleLogin() {
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      handleClose();
      navigate("../profile", { replace: true });
    } catch (er) {
      if (er.message.includes("auth/invalid-email")) {
        setError("Invalid Email");
      } else if (er.message.includes("auth/wrong-password")) {
        setError("Wrong Password");
      } else {
        setError("Login Error");
        // Look into firebase logs.
      }
    }
    setLoading(false);
  }

  return (
    <>
      <Button
        className="login-button"
        variant="primary"
        onClick={handleShow}
        data-testid="login"
      >
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form name="login" type="form">
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                placeholder="Enter email"
                data-testid="emailAddress"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="Password"
                data-testid="password"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            data-testid="close"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            variant="primary"
            disabled={loading}
            onClick={handleLogin}
            data-testid="submit"
          >
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
