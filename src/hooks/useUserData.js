import { useEffect, useState } from "react";
import { getUserDocument } from "../firebase";
import { useAuth } from "./useAuth";

export function useUserData() {
    const [userData, setUserData] = useState({});
    const user = useAuth();

    useEffect(() => {
        const getUserData = async () => {
          const data = await getUserDocument(user);
          setUserData(data);
        };
        getUserData();
    }, [user]);
  
  
    return userData;
  }