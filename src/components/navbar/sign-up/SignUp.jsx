import React, { useState, useRef } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import { signup, createUserDocument, db } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import "./SignUp.scss";
import {collection, addDoc, Timestamp} from 'firebase/firestore'

export default function SignUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setError("");
  };
  const handleShow = () => setShow(true);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const navigate = useNavigate();

  async function handleSignup() {
    if (passwordRef.current.value === passwordConfirmRef.current.value) {
      try {
        setError("");
        setLoading(true);
        console.log(userNameRef.current.value);
        let userName = userNameRef.current.value;

        const { user } = await signup(
          emailRef.current.value,
          passwordRef.current.value
        );

        console.log(user);

        createUserDocument(user, userName);
     

        handleClose();
        navigate("../profile", { replace: true });
      } catch (e) {
        console.log(e.message);

        if (e.message.includes("auth/invalid-email")) {
          setError("Invalid Email");
        } else if (e.message.includes("auth/weak-password")) {
          setError("Password should be at least 6 characters");
        } else if (e.message.includes("auth/email-already-in-use")) {
          setError("This email already has an account");
        } else {
          setError("Something Went Wrong ");
        }
      }
      setLoading(false);
    } else {
      setError("Passords Do Not Match");
    }
  }

  return (
    <>
      <Button className="sign-up-button" variant="primary" onClick={handleShow}>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group className="mb-3" controlId="formGroupUserName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                ref={userNameRef}
                type="text"
                placeholder="User name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                placeholder="Password"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" disabled={loading} onClick={handleSignup}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
