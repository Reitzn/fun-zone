import React, { useState, useRef } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { login } from "../../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const emailRef = useRef();
  const passwordRef = useRef();

  let navigate = useNavigate();

  async function handleLogin() {
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    handleClose();
    navigate("../profile", { replace: true });
  }

  // async function handleForgotPassword() {
  //   try {
  //     await resetPassword(emailRef.current.value);
  //   } catch {
  //     alert("Error!");
  //   }
  //   handleClose();
  // }

  const signinForm = (
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" ref={emailRef} placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" ref={passwordRef} placeholder="Password" />
      </Form.Group>
    </Form>
  );


  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{ margin: '0 5px' }}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>{signinForm}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
