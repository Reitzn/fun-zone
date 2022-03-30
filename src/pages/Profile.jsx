import React from "react";
import { useAuth } from "../hooks/useAuth";
import UserCard from "../components/user/user-card/UserCard";
import UpdateProfileInformation from "../forms/update-profile-information/UpdateProfileInformation";

export default function Profile() {
  const currentUser = useAuth();

  const profileDescription = "Tell me about yourself.";

  return (
    <div>
      <h1>Welcome: {currentUser?.email}</h1>
      <div className="row">
        <div className="col">
          <h3>Update profile information</h3>
          <UpdateProfileInformation />
        </div>
        <div className="col">
          <UserCard
            userName={currentUser?.email}
            profileImage="https://via.placeholder.com/286x180"
            profileDescription={profileDescription}
          />
        </div>
      </div>
    </div>
  );
}
