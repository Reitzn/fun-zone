import React from "react";
import { Card, Button } from "react-bootstrap";
import './UserCard.scss';

export default function UserCard(props) {
    const { userName, profileImage, profileDescription } = props;

    return (
    <div >
      <Card className="user-card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={profileImage} />
        <Card.Body>
          <Card.Title>{userName}</Card.Title>
          <Card.Text>{profileDescription}</Card.Text>
          <Button variant="primary">Message</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
