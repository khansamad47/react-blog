import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';

import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import Home from './pages/Home';
import Navigator from './components/Navigator';
import { logoutUser } from './services/authentication';
import { UserContextProvider, UserContext } from './contexts/UserContext';

function App() {

  return (
    <div className="App">
      <UserContextProvider>
      <Navigator/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/createpost" element={<CreatePost />} />
      </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;