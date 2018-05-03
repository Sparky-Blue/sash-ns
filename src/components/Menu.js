import React, { Component } from "react";

import { Navbar, Button } from "react-bootstrap";
class Menu extends Component {
  goTo = route => {
    this.props.history.replace(`/${route}`);
  };

  render() {
    return (
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Auth0 - React</a>
          </Navbar.Brand>
          <Button
            bsStyle="primary"
            className="btn-margin"
            onClick={() => this.goTo("")}
          >
            Home
          </Button>
          <Button
            bsStyle="primary"
            className="btn-margin"
            onClick={() => this.goTo("hostrota")}
          >
            Rota
          </Button>
          <Button
            bsStyle="primary"
            className="btn-margin"
            onClick={() => this.goTo("hostmessages")}
          >
            Messages
          </Button>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default Menu;
