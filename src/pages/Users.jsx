import React from "react";
import UserFacade from "../components/user/user-facade/UserFacade";

export default function Users(props) {

    return (
    <div>
      <h1>Users</h1>
      <UserFacade {...props} />
    </div>
  );
}
