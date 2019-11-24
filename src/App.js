import React from 'react';
import './App.css';
import Post from './Components/Post'
import Postform from './Components/Postform'
//provider import - glue for react and redux
import {Provider} from 'react-redux';

import store from  './store'


function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Postform></Postform> 
    <Post></Post>
    </div>
    </Provider>
  );
}

export default App;
