import React, { Component } from "react";
import "./SandboxForm.scss";

class SandboxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pattern: "",
      flags: "",
      body: ""
    };
  }

  _handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      const { pattern, flags, body } = this.state;
      const formData = { pattern, flags, body };
      this.props.handleData(formData);
    });
  };

  render() {
    return (
      <section>
        <form className="SandboxForm" onSubmit={this._handleSubmit}>
          <div className="Sandbox-input-container main-container">
            <label htmlFor="pattern-input">Pattern</label>
            <input
              type="text"
              name="pattern"
              spellCheck="false"
              placeholder="/pattern/"
              onChange={this._handleChange}
            />
          </div>
          <div className="Sandbox-input-container flag-container">
            <label htmlFor="flag-input">Flags</label>
            <input
              type="text"
              name="flags"
              spellCheck="false"
              placeholder="/flags"
              onChange={this._handleChange}
            />
          </div>
        </form>
        <hr />
        <textarea
          name="body"
          id="Sandbox-textarea"
          className="Sandbox-textarea"
          rows="20"
          placeholder="Enter the text you want to test your regular expression against..."
          spellCheck="false"
          onChange={this._handleChange}
        />
      </section>
    );
  }
}

export default SandboxForm;
