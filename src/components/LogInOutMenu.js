import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";

class LoginOutMenu extends Component {
  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <Navbar fluid>
        <Navbar.Header>
          {!isAuthenticated() && (
            <Button
              id="qsLoginBtn"
              bsStyle="primary"
              className="btn-margin"
              onClick={this.login.bind(this)}
            >
              Log In
            </Button>
          )}
          {isAuthenticated() && (
            <Button
              id="qsLogoutBtn"
              bsStyle="primary"
              className="btn-margin"
              onClick={this.logout.bind(this)}
            >
              Log Out
            </Button>
          )}
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default LoginOutMenu;
