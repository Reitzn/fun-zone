import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export default function ContactMe() {
  const [validated, setValidated] = useState(false);

  const handleSend = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    // DO WORK: Add stuff
    // emailjs
    //   .sendForm(
    //    
    //   )
    //   .catch((er) => console.log(er));

    setValidated(true);
  };

  return (
    <>
      <h1>Contact Me</h1>
      <Form noValidate validated={validated} onSubmit={handleSend}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Bob Ross"
              name={'name'}
            />
            <Form.Control.Feedback type="invalid">
              Please let me know who you are.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="name@example.com"
              name={'email'}
            />
            <Form.Control.Feedback type="invalid">
              Please enter an email so I can get back to you.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="formGroupSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              placeholder="Subject"
              required
              name={'subject'}
            />
            <Form.Control.Feedback type="invalid">
              Please let me know what this is about.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formGroupMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={6} required name={'message'} />
          <Form.Control.Feedback type="invalid">
            Don't spam my email.
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit">Send</Button>
      </Form>
    </>
  );
}
