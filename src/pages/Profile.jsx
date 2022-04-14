import React, { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useUserData } from "../hooks/useUserData";

import UserCard from "../components/user/user-card/UserCard";
import UpdateProfileInformation from "../forms/UpdateProfileInformation";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setLogLevel,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";

import { getUserDocument } from "../firebase";

export default function Profile() {
  const user = useAuth();
  const userData = useUserData();

  const profileDescription = "Tell me about yourself.";

  // useEffect(() => {
  //     const getUserData = async () => {
  //       const data = await getUserDocument(user);
  //       setUserData(data);
  //     };
  //     getUserData();
  // }, [user]);

  return (
    <div>
      <h1>Welcome: {userData?.userName}</h1>
      <div className="row">
        <div className="col-sm-6">
          <h2>Update profile information</h2>
          <UpdateProfileInformation userData={userData} />
        </div>
        <div className="col d-flex justify-content-center">
          <UserCard
            userName={user?.email}
            profileImage="https://via.placeholder.com/286x180"
            profileImageAltText="Example of a profile image"
            profileDescription={profileDescription}
          />
        </div>
      </div>
    </div>
  );
}
