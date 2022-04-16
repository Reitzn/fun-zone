import React, { useState, useRef, useEffect } from "react";
import UserCard from "../user-card/UserCard";
import { Form, Button, Row, Col } from "react-bootstrap";

import "./UserFacade.scss";

export default function UserFacade(props) {
  const [currentUsers, setCurrentUsers] = useState();
  const nameRef = useRef();
  const { users } = props;

  useEffect(() => {
    setCurrentUsers(users);
  }, [users]);

  function handleSearch() {
    setCurrentUsers(filterItems(users, nameRef.current.value));
  }

  const filterItems = (arr, query) => {
    return arr.filter(
      (el) => el.userName.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  };

  return (
    <div className="user-facade">
      <Form>
        <Row>
          <Col xs={9}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" data-testid="searchName" ref={nameRef} />
            </Form.Group>
          </Col>
          <Col xs={3}>
            <Button data-testid="submit" onClick={handleSearch}>Search</Button>
          </Col>
        </Row>
      </Form>
      <div className="row">
        {currentUsers?.map((user) => (
          // col-sm-12 col-md-4 col-lg-3
          <div
            key={user.userName}
            className="user-facade__col col-sm-6 col-md-4 col-lg-3 d-flex aligh-items-stretch"
          >
            <UserCard {...user} />
          </div>
        ))}
      </div>
    </div>
  );
}
