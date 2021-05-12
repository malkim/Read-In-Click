import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/homePage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div>
      
      
      <Router>
        <Switch>
          <Route path="/rate">
            <rate />
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
