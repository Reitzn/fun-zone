import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Form, Row, Col, Button } from "react-bootstrap";
import UserCard from "../components/user/user-card/UserCard";

export default function Profile() {
  const currentUser = useAuth();

  const profileDescription =
    "Some quick example text to build on the card title and make up the bulk of the card's content.";

  return (
    <div>
      <h1>Welcome: {currentUser?.email}</h1>
      <UserCard
        userName="User Name"
        profileImage="https://via.placeholder.com/286x180"
        profileDescription={profileDescription}
      />
      <Form noValidate>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Bob Ross"
              name={"name"}
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
              name={"email"}
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
              name={"subject"}
            />
            <Form.Control.Feedback type="invalid">
              Please let me know what this is about.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formGroupMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={6} required name={"message"} />
          <Form.Control.Feedback type="invalid">
            Don't spam my email.
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit">Send</Button>
      </Form>
    </div>
  );
}
