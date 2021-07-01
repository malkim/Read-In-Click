import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//import Login from './login/api';
import Routing from './components/router'


function App() {

  const Signup=()=>{

  }
  const Login=()=>{

  }


  return (
    <div>
      <Routing />
      <button onClick={Login}>משתמש קיים</button>
      <button onClick={Signup}>משתמש חדש</button>

    </div>);
}
export default App;
