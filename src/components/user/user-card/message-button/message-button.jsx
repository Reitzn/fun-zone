import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default function MessageButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="message-button mt-auto align-self-start" variant="primary" onClick={handleShow}>
        Message
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Send Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Subject</Form.Label>
              <Form.Control placeholder="Subject" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button data-testid="login-button" variant="primary">
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
