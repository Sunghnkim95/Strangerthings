import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';

import Posts from './components/post.js';
import Login from './components/login.js';
import Register from './components/register.js';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userToken, setUserToken] = useState('')

  return <div id="app">
  
  <Posts
    isLoggedIn = {isLoggedIn}
    setIsLoggedIn = {setIsLoggedIn}
    userToken = {userToken}
    setUserToken = {setUserToken}
  />

  <Login
    isLoggedIn ={isLoggedIn}
    setIsLoggedIn={setIsLoggedIn}
    userToken = {userToken}
    setUserToken = {setUserToken}
  />

  { isLoggedIn ? null : 
  <Register
  isLoggedIn ={isLoggedIn}
  setIsLoggedIn={setIsLoggedIn}
  userToken = {userToken}
  setUserToken = {setUserToken}
  />
  }
  
  </div>
}
    



ReactDOM.render(<App />, document.getElementById('app'));