import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';

import Posts from './components/post.js';

const App = () => {
  return <div id="app">
  
  <Posts />

  </div>
}
    



ReactDOM.render(<App />, document.getElementById('app'));