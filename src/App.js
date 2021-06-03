import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from './api';
import Routing from './components/router'


function App() {

 
  return (<div>
    <Routing/>
    <button onClick={Login}>Login</button>
  </div>);
}
export default App;
