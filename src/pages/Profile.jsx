import React from "react";
import { useAuth } from "../hooks/useAuth";
import UserCard from "../components/user/user-card/UserCard";
import UpdateProfileInformation from "../forms/UpdateProfileInformation";

export default function Profile() {
  const currentUser = useAuth();

  const profileDescription = "Tell me about yourself.";

  return (
    <div>
      <h1>Welcome: {currentUser?.email}</h1>
      <div className="row">
        <div className="col-sm-6">
          <h2>Update profile information</h2>
          <UpdateProfileInformation />
        </div>
        <div className="col d-flex justify-content-center">
          <UserCard
            userName={currentUser?.emaonil}
            profileImage="https://via.placeholder.com/286x180"
            profileImageAltText="Example of a profile image"
            profileDescription={profileDescription}
          />
        </div>
      </div>
    </div>
  );
}
