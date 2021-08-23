import React, {useState} from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import Posts from './components/post.js';
import Login from './components/login.js';
import Register from './components/register.js';
import Postdetails from './components/postdetails.js'
import Profile from './components/profile.js'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userToken, setUserToken] = useState('')
  const [featuredResult, setFeaturedResult] = useState(null)
  
  return <div id="app">
   

      <div className="PostsScreen">
        <Posts
          isLoggedIn = {isLoggedIn}
          setIsLoggedIn = {setIsLoggedIn}
          userToken = {userToken}
          setUserToken = {setUserToken}
          featuredResult = {featuredResult}
          setFeaturedResult = {setFeaturedResult}

        />
      </div>
      
      <div className="rightviewport">
        <Router>
          {isLoggedIn ? <Postdetails featuredResult={featuredResult} setFeaturedResult={setFeaturedResult} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userToken={userToken} setUserToken={setUserToken} />  : <Login isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn} userToken = {userToken} setUserToken={setUserToken}/>}
        


    {/* {  isLoggedIn ? <Postdetails /> : */}
      {/* <Router>        
          <Switch> 
            <Route path ="/login">
              <Link className="signup" to='/Register'>
                New to Snap Attack? Sign up here!
              </Link> */}
              {/* <Login                  
                isLoggedIn ={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                userToken = {userToken}
                setUserToken = {setUserToken}
                /> */}
            {/* </Route>
            <Route path ="/Register">
              <Link className="signup" to="/login">
                  Already have an account? Login here!
              </Link>
                <Register
                isLoggedIn ={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                userToken = {userToken}
                setUserToken = {setUserToken}
                />
            </Route> */}
            
          {/* </Switch>
      </Router> */}
    {/* }  */}
    </Router>
      </div>
      <div className="profileandmessages">
        {isLoggedIn ? <Profile /> : null}
      </div>
      
            
    </div>
    // </Router>
  
}
    



ReactDOM.render(<App />, document.getElementById('app'));