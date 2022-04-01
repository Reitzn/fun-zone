import React from "react";
import { Card, Button } from "react-bootstrap";
import './UserCard.scss';
import MessageButton from '../message-button/message-button';

export default function UserCard(props) {
    const { userName, profileImage, profileImageAltText, profileDescription } = props;

    return (
    <div > 
      <Card className="user-card" >
        <Card.Img variant="top" alt={profileImageAltText} src={profileImage} />
        <Card.Body className='d-flex flex-column'>
          <Card.Title>{userName}</Card.Title>
          <Card.Text>{profileDescription}</Card.Text>
          <MessageButton />
          <Button className="user-card__button mt-auto align-self-start" variant="primary">Message</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
