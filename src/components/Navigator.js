import {React, useContext, useEffect } from 'react'
import { logoutUser } from '../services/authentication';
import { UserContext } from '../contexts/UserContext';
import { Link, Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

export default function Navigator() {
  const {user, setUser} = useContext(UserContext);

  const logoutHandler = () => {
    logoutUser();
    setUser(null);
  };

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        {!user && <Link to="/login">Login</Link>}
        {user && <Link to="/createpost">Create Post</Link>}
        {user && <p>Logged in as { user.displayName }.</p>}
        {user && <button onClick={ logoutHandler } >Logout</button>}
      </nav>
    </>
  )
}
