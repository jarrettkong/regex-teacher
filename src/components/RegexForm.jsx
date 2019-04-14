import React, { Component } from 'react';
import './RegexForm.scss'

class InputForm extends Component {
  
  state = {
    body: '',
    flags: ''
  }

  _handleBody = e => {
    this.setState({ body: e.target.value });
  }

  _handleFlag = e => {
    this.setState({ flags: e.target.value })
  }

  _handleSubmit = e => {
    e.preventDefault();
    const { body, flags } = this.state;
    this.props.checkAnswer(body, flags);
  }

  render() {
    return (
      <form className="RegexForm-input" onSubmit={this._handleSubmit}>
        <div className="Regex-input-container main-container">
          <label htmlFor="main-input">Body</label>
          <input type="text" id="main-input" spellCheck="false" placeholder="Type your regular expression here..." value={this.state.body} onChange={this._handleBody}/>
        </div>
        <div className="Regex-input-container flag-container">
          <label htmlFor="flag-input">Flags</label>
          <input type="text" id="flag-input" spellCheck="false" placeholder="Flags..." value={this.state.flags} onChange={this._handleFlag}/>
        </div>
        <input type="submit" className="RegexForm-submit"/>
      </form>
    )
  }
}

export default InputForm
