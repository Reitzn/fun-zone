import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useAuth } from "../../hooks/useAuth";

export default function UpdateProfileInformation() {

    const currentUser = useAuth();
    const profileDescription = "Tell me about yourself.";

  return (
    <>
      <Form noValidate>
            <Form.Group controlId="formGroupUserName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder={currentUser?.email}
                name={"userName"}
              />
            </Form.Group>
            <Form.Group controlId="formGroupAbout">
              <Form.Label>About</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                placeholder={profileDescription}
                required
                name={"about"}
              />
            </Form.Group>
            <Button type="submit">Update Information</Button>
          </Form>
    </>
  );
}
