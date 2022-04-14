import React, {useEffect, useRef} from "react";
import { Form, Button } from "react-bootstrap";
import { useAuth } from "../hooks/useAuth";
import { updateUserDocument } from "../firebase"; 

export default function UpdateProfileInformation(props) {
  const currentUser = useAuth();
  const {userData} = props;
  console.log(props);

  const userNameRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const aboutRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userRefData = {
      userName: userNameRef.current.value,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      aboutUser: aboutRef.current.value
    };

    updateUserDocument(currentUser, userRefData);
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="textarea" ref={userNameRef} placeholder={userData?.userName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="textarea" ref={firstNameRef} placeholder={userData?.firstName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="textarea" ref={lastNameRef} placeholder={userData?.lastName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea4">
          <Form.Label>About</Form.Label>
          <Form.Control as="textarea" ref={aboutRef} placeholder={userData?.aboutUser} rows={3} />
        </Form.Group>
        <Button type="submit">Update</Button>
      </Form>
    </>
  );
}
