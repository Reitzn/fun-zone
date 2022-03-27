import React from "react";
import UserCard from "../user-card/UserCard";

import './UserFacade.scss';

export default function UserFacade(props) {
  const { users } = props;

  return (
    <div className="user-facade">
      <div className="row">
        {users?.map((user) => (
          <div className="user-facade__col col">
            <UserCard {...user} />
          </div>
        ))}
      </div>
    </div>
  );
}
