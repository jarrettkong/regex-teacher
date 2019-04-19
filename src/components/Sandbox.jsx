import React, { Component } from "react";
import SandboxForm from "./SandboxForm.jsx";
import SandboxResults from "./SandboxResults.jsx";
import Nav from "./Nav.jsx";
import "./Sandbox.scss";

class Sandbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: []
    };
  }

  displayMatches = inputData => {
    const matches = this.getMatches(inputData);
    if (!matches) {
      return;
    }
    this.setState({ matches });
  };

  getMatches = inputData => {
    const { pattern, flags, body } = inputData;
    try {
      const regex = new RegExp(pattern, flags);
      const matches = body.match(regex);
      return matches;
    } catch (err) {
      return;
    }
  };

  render() {
    return (
      <main className="Sandbox">
        <Nav />
        <h1 className="Sandbox-header">Sandbox</h1>
        <p>Test your regular expressions with a custom input</p>
        <section className="Sandbox-area">
          <SandboxForm displayMatches={this.displayMatches} />
          <SandboxResults matches={this.state.matches} />
        </section>
      </main>
    );
  }
}

export default Sandbox;
