import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';

import Posts from './components/post.js';
import Login from './components/login.js';
import Register from './components/register.js';

const App = () => {
  return <div id="app">
  
  <Posts/>
  <Login/>
  <Register/>
  </div>
}
    



ReactDOM.render(<App />, document.getElementById('app'));