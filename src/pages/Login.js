import React from 'react'
import { createLoginPopup } from '../firebase';

export default function Login({ setIsAuth }) {
  const onClickHandler = () => {
    createLoginPopup()
    .then((user) => { 
        console.log(user);
        setIsAuth(true);
    })
    .catch((error)=> console.log(error))
  };
  return (
    <>
    <p>SignIn with Google to Continue</p>
    <button onClick={ onClickHandler } >SignInWithGoogle</button>
    </>
  )
}
