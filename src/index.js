import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import Posts from './components/post.js';
import Login from './components/login.js';
import Register from './components/register.js';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userToken, setUserToken] = useState('')

  return <Router>
    <div id="app">

      <div className="post">
        <Posts
          isLoggedIn = {isLoggedIn}
          setIsLoggedIn = {setIsLoggedIn}
          userToken = {userToken}
          setUserToken = {setUserToken}
        />
      </div>
      <div className="loginandregister">
    <Switch>
      <Route path="/login">
        <Login
          isLoggedIn ={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          userToken = {userToken}
          setUserToken = {setUserToken}
        />
      </Route>

      <Route path="/register">
        { isLoggedIn ? null : 
        <Register
        isLoggedIn ={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        userToken = {userToken}
        setUserToken = {setUserToken}
        />
        }
      </Route>
    </Switch>
    </div>
    </div>
  </Router>
}
    



ReactDOM.render(<App />, document.getElementById('app'));