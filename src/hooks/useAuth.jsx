import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export function useAuth() {
    const [ currentUser, setCurrentUser ] = useState();
    const auth = getAuth();

    useEffect(() => {
      const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
      return unsub;
    }, [auth])
  
    return currentUser;
  }