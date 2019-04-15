import React, { Component } from 'react';
import './RegexForm.scss'

class RegexForm extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      pattern: '',
      flags: ''
    }
  }

  _handlePattern = e => {
    this.setState({ pattern: e.target.value });
  }

  _handleFlag = e => {
    this.setState({ flags: e.target.value })
  }

  _handleSubmit = e => {
    e.preventDefault();
    const { pattern, flags } = this.state;
    this.props.checkAnswer(pattern, flags);
  }

  render() {
    return (
      <form className="RegexForm-input" onSubmit={this._handleSubmit}>
        <div className="Regex-input-container main-container">
          <label htmlFor="pattern-input">Pattern</label>
          <input type="text" id="pattern-input" spellCheck="false" placeholder="/pattern/" value={this.state.pattern} onChange={this._handlePattern} minLength="1"/>
        </div>
        <div className="Regex-input-container flag-container">
          <label htmlFor="flag-input">Flags</label>
          <input type="text" id="flag-input" spellCheck="false" placeholder="/flags" value={this.state.flags} onChange={this._handleFlag} pattern="[gimsxeU]*"/>
        </div>
        <input type="submit" className="RegexForm-submit"/>
      </form>
    )
  }
}

export default RegexForm
