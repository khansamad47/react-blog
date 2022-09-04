import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {

  const [ isAuth, setIsAuth ] = useState(false);

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/createpost">Create Post</Link>
        { isAuth ? <p>Logout</p> : <></> }
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login setIsAuth={ setIsAuth } />} />
        <Route exact path="/createpost" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;