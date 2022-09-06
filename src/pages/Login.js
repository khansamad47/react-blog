import React from 'react'
import { useContext } from 'react';
import { createLoginPopup } from '../services/authentication';
import { UserContext } from '../contexts/UserContext';

export default function Login() {
  const { setUser } = useContext(UserContext);

  const onClickHandler = () => {
    createLoginPopup()
    .then(({user}) => { 
        console.log("Setting UserContext Value");
        setUser(user);
    })
    .catch((error)=> console.log(error));
  };
  return (
    <>
    <p>SignIn with Google to Continue</p>
    <button onClick={ onClickHandler } >SignInWithGoogle</button>
    </>
  )
}
