import './App.css';
import React from "react";
import Home from './components/HackerDashboard/Home/Home';
import Facebook from './components/PhishingSite/Facebook/Facebook';
import Login from './components/Login/Login';
import Documentation from './components/Login/Documentation';
import Twitter from './components/PhishingSite/Twitter/Twitter'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/facebook">
          <Facebook/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/doc">
          <Documentation/>
        </Route>
        <Route path="/twitter">
          <Twitter/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;