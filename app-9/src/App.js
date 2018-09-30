import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {NavLink,Route} from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import Details from "./Details";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink
          to="/"
          >Home</NavLink>
          <NavLink
          to="/signup"
          >Signup</NavLink>
          <NavLink
          to="/details"
          >Details</NavLink>
        </nav>
        <Route
          exact
          path="/"
          render={()=>(
            <Home/>
          )}
        />
        <Route
          exact
          path="/signup"
          component={Signup}
        />
        <Route
          exact
          path="/details"
          component={Details}
        />
      </div>
    );
  }
}

export default App;
