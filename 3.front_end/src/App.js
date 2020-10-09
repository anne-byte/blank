import React, { Component } from "react";
import { Link, Route, Switch} from "react-router-dom";
import ApaYapa from "./components/ApaYapa";
import "./App.css";

import Layout from "./components/layout";

class App extends Component {
  render() {
    return (
     
      <div className="App">
        PayPal Coding Exercise
        <Link to="/ApaYapa">
          <p> Apayapa</p>
        </Link>      
        <Layout />
        <Switch>
        <Route path="/ApaYapa" exact component={ApaYapa} />
        {/* <Route path="/" exact component={Layout} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
