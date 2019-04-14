import React, { Component } from 'react';
import './RegexForm.scss'

class InputForm extends Component {
  
  state = {
    inputValue: ''
  }

  _handleChange = e => {
    this.setState({ inputValue: e.target.value }, console.log(this.state.inputValue));
  }

  render() {
    return (
      <header className="RegexForm-input">
        <label htmlFor="regex-input">Regular Expression</label>
        <input type="text" id="regex-input" placeholder="Type your regular expression here..." value={this.state.inputValue} onChange={this._handleChange}/>
      </header>
    )
  }
}

export default InputForm
