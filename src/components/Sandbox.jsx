import React, { Component } from 'react'
import SandboxForm from './SandboxForm.jsx'
import SandboxResults from './SandboxResults.jsx'
import Nav from './Nav.jsx'
import './Sandbox.scss'

class Sandbox extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pattern: '',
      flags: '',
      inputValue: '',
      matches:[]
    }
  }

  _handleForm = (pattern, flags) => {
    if(pattern.endsWith('\\')) {
      return;
    }
    this.setState({ pattern, flags }, () => {
      const matches = this.getMatches();
      this.setState({ matches })
    })
  }

  _handleTextArea = e => {
    this.setState({ inputValue: e.target.value }, () => {
      const matches = this.getMatches();
      this.setState({ matches })
    })
  }

  getMatches = () => {
    const { pattern, flags, inputValue } = this.state;
    const regex = new RegExp(pattern, flags);
    const matches = inputValue.match(regex);
    if(!matches) {
      return;
    }
    return matches;
  }

  render() {
    return (
      <main className="Sandbox">
        <Nav />
        <h1 className="Sandbox-header">Sandbox</h1>
        <p>Test your regular expressions with a custom input</p>
        <section className="Sandbox-area">
          <SandboxForm handleTextArea={this._handleTextArea} handleForm={this._handleForm}/>
          <SandboxResults matches={this.state.matches}/>
        </section>
      </main>
    )
  }
}

export default Sandbox
