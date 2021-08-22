import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Postdetails from './postdetails.js'
import Userposts from './userposts.js'
import Messages from './messages.js'

const Profile = () => {
    return (
        <Router>
            <div>
                <nav>
                    <img className="logo" src='https://placekitten.com/50/50'></img>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/myposts">My Posts</Link></li>
                        <li><Link to="/mymessages">Messages</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/myposts">
                        <Userposts />
                    </Route>
                    <Route path="/mymessages">
                        <Messages />
                    </Route>
                    <Route exact path="/">
                        HOME COMPONENT GOES HERE
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Profile;