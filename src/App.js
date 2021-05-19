import React from 'react';
import './App.css';
import Home from './components/homePage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import OldUser from './components/oldUser';
import NewUser from './components/newUser';
import Report from './components/report';


function App() {
  return (
    <div>
   <Router>
      <Switch>
      <Route path="/report">
            <Report/>         
          </Route>
          <Route path="/rate">
            <NewUser/>         
          </Route>
          <Route path="/exist">
            <OldUser />
          </Route>
          <Route path="/">
            <Home />
          </Route>         
      </Switch>
</Router>
    </div>
  );
}

export default App;
