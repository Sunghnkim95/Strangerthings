import React, { useEffect, useState } from 'react'
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
  const [clickedMessage, renderMessageForm] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  useEffect(()=> {
    
      if (localStorage.getItem("token") ){  
        setUserToken( localStorage.getItem("token") )
      } 
  }, [userToken])

  return <div id="app">
    <div className="rightAndLeftScreen">
      <div className="PostsScreen">
        <Posts
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          userToken={userToken}
          setUserToken={setUserToken}
          featuredResult={featuredResult}
          setFeaturedResult={setFeaturedResult}
          clickedMessage={clickedMessage}
          renderMessageForm={renderMessageForm}
        />
      </div>

      <div className="rightviewport">
        <Router>
          { userToken ? <Postdetails featuredResult={featuredResult} setFeaturedResult={setFeaturedResult} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
            userToken={userToken} setUserToken={setUserToken} clickedMessage={clickedMessage} renderMessageForm={renderMessageForm} /> : <Login isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn} userToken={userToken} setUserToken={setUserToken} />}

          <div className="signup">
            {isLoggedIn ? <h3>YOUR ARE LOGGED IN!</h3> :
              <h3>
                <Route>
                  {showRegister ?
                    <Register
                      isLoggedIn={isLoggedIn}
                      setIsLoggedIn={setIsLoggedIn}
                      userToken={userToken}
                      setUserToken={setUserToken} />
                    : <Link className='registerbtn' onClick={() => {
                      setShowRegister(true)
                      console.log(showRegister)
                    }}>
                      New to Snap Attack? Sign up here!
                    </Link>
                  }
                </Route>
              </h3>
            }
          </div>
        </Router>
      </div>
    </div>
    <div className="profileandmessages">
      {isLoggedIn&&userToken ? <Profile
        clickedMessage={clickedMessage} renderMessageForm={renderMessageForm} setIsLoggedIn={setIsLoggedIn} isLoggedIn={setIsLoggedIn} setUserToken={setUserToken} userToken={userToken} /> : null}
    </div>
  </div>
}

ReactDOM.render(<App />, document.getElementById('app'));