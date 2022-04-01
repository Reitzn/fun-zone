import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export function useAuth() {
    const [ currentUser, setCurrentUser ] = useState();
    const auth = getAuth();

    useEffect(() => {
      return onAuthStateChanged(auth, user => setCurrentUser(user));
    }, [auth])
  
    return currentUser;
  }