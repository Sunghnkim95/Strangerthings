import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Postdetails from './postdetails.js'
import Userposts from './userposts.js'
import Messages from './messages.js'
import Newmessageform from './newmessageform.js'

const Profile = ({userToken}) => {

    const [clickedMessage, renderMessageForm] = useState()
    return (
        <Router>
            <div>
                <img className="logo" src='https://placekitten.com/50/50'></img>
                <nav className="navi">
                    <div className='naviHome'><Link to="/">Home</Link></div>
                    <div className='naviPost'><Link to="/myposts">My Posts</Link></div>
                    <div className='naviMessage'><Link to="/mymessages">Messages</Link></div>

                </nav>
                <Switch>
                    <Route path="/myposts">
                        <Userposts userToken={userToken} />
                    </Route>
                    <Route path="/mymessages">
                        <Messages userToken={userToken} />
                        {clickedMessage ? <Newmessageform clickedMessage={clickedMessage} renderMessageForm={renderMessageForm} messageContent={messageContent} setContent={setContent} /> : null}
                    </Route>
                    <Route exact path="/">
                        <div className="welcome">WELCOME TO SNAP ATTACK!!!</div>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Profile;