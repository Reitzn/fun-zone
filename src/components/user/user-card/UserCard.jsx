import React from "react";
import { Card } from "react-bootstrap";
import './UserCard.scss';
import MessageButton from './message-button/MessageButton';

export default function UserCard(props) {
    const { userName, profileImage, profileImageAltText, profileDescription } = props;

    return (
    <> 
      <Card className="user-card" >
        <Card.Img variant="top" alt={profileImageAltText} src={profileImage} />
        <Card.Body className='d-flex flex-column'>
          <Card.Title>{userName}</Card.Title>
          <Card.Text>{profileDescription}</Card.Text>
          <MessageButton />
        </Card.Body>
      </Card>
    </>
  );
}
