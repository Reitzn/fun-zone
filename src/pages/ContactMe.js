import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export default function ContactMe() {
  return (
    <>
      <h1>Contact Me</h1>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="email" placeholder="Bob Ross" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="email" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Mesage</Form.Label>
          <Form.Control as="textarea" rows={6} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </>
  );
}
