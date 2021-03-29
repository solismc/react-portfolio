import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
/*import {Router, Link, Switch, Route } from "react-router-dom";*/
import React, { Component } from "react";
import HomePage from "./components/HomePage";
import Instructions from "./components/Instructions.js";
import Questions from "./components/Questions.js";
import CaptureForm from "./components/CaptureForm.js";
import Results from "./components/Results.js";
import history from './components/History';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    console.log(process.env)
    return (
      <Router history={history}>
        <div className="App">
          <nav class="navbar navbar-expand-sm bg-light">
          <ul className="ul-list">
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/brand"></Link>
            </li>
            <li>
              <Link to="/leadership"></Link>
            </li>
            <li>
              <Link to="/code"></Link>
            </li>
            <li>
                <Link to="/aboutme"></Link>
            </li>
            <li>
                <Link to="/contact"></Link>
            </li>
          </ul>
          </nav>
        <div>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/brand" exact component={Brand} />
              <Route path="/leadership" exact component={Leadership} />
              <Route path="/code" exact component={Code} />
              <Route path="/aboutme" exact component={AboutMe} />
              <Route path="/contact" exact component={Contact} />
            </Switch>
        </div>
      </div>
    </Router>          
  );
}

export default App;
