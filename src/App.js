import './App.css';
import React from "react";
import Home from './components/HackerDashboard/Home/Home';
import Facebook from './components/PhishingSite/Facebook/Facebook';
import Login from './components/Login/Login';
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
      </Switch>
    </Router>
  );
}

export default App;