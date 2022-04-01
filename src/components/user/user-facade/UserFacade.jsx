import React from "react";
import UserCard from "../user-card/UserCard";

import './UserFacade.scss';

export default function UserFacade(props) {
  const { users } = props;

  return (
    <div className="user-facade">
      <div className="row">
        {users?.map((user) => (
          // col-sm-12 col-md-4 col-lg-3
          <div className="user-facade__col col-sm-6 col-md-4 col-lg-3 d-flex aligh-items-stretch">
            <UserCard {...user} />
          </div>
        ))}
      </div>
    </div>
  );
}
