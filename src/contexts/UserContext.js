import { createContext } from "react";
import {React, useState, useEffect } from 'react'
import {auth} from '../services/authentication';

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [ user, setUser ] = useState(null);

  useEffect(()=> {
    const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
            console.log("User already loaded", user);
            setUser(user);
        }
    });
    return unsubscribe;
  },[])

  return (
    <UserContext.Provider value ={ {user, setUser} }>
        { children }
    </UserContext.Provider>
  )
}
