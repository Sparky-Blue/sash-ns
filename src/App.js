import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Auth from "./Auth/Auth.js";
import Menu from "./components/Menu";
import LogInOutMenu from "./components/LogInOutMenu";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Menu history={this.props.history} />
        </header>
        <footer>
          <LogInOutMenu auth={this.props.auth} />
        </footer>
      </div>
    );
  }
}

export default App;
