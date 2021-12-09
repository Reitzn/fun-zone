import React, { useState, useRef } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { signup } from "../../firebase";


export default function SignUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();


  async function handleSignup() {
    // try {
      await signup(emailRef.current.value, passwordRef.current.value);
    // } catch {
      // alert("Error!");
    // }
  }

  const signUpForm = (
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" ref={emailRef} placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" ref={passwordRef} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
        <Form.Label>Confirm password</Form.Label>
        <Form.Control type="password" ref={passwordConfirmRef} placeholder="Password" />
      </Form.Group>
    </Form>
  );


  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{ margin: '0 5px' }}>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>{signUpForm}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSignup}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
