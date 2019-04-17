import React, { Component } from 'react';
import './SandboxForm.scss'

class SandboxForm extends Component {

  _handleForm = () => {
    const pattern = document.querySelector('#pattern-input').value;
    const flags = document.querySelector('#flag-input').value;
    this.props.handleForm(pattern, flags);
  }

  render() {
    return (
      <section>
        <form className="SandboxForm" onSubmit={this._handleSubmit}>
          <div className="Sandbox-input-container main-container">
            <label htmlFor="pattern-input">Pattern</label>
            <input type="text" id="pattern-input" spellCheck="false" placeholder="/pattern/" onChange={this._handleForm} minLength="1"/>
          </div>
          <div className="Sandbox-input-container flag-container">
            <label htmlFor="flag-input">Flags</label>
            <input type="text" id="flag-input" spellCheck="false" placeholder="/flags" onChange={this._handleForm} pattern="[gimsxeU]*"/>
          </div>
        </form>
        <hr/>
        <textarea name="Sandbox-textarea" id="Sandbox-textarea" className="Sandbox-textarea" rows="20" placeholder="Enter the text you want to test your regular expression against..." spellCheck="false" onChange={this.props.handleTextArea}></textarea>
      </section>
    )
  }
}

export default SandboxForm