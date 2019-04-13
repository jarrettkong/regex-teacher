import React, { Component } from 'react';
import './RegexForm.scss'

class InputForm extends Component {
  
  state = {
    inputValue: ''
  }

  _handleChange = e => {
    this.setState({ inputValue: e.target.value })
  }

  render() {
    return (
      <header className="RegexForm-input">
        <input type="text" value={this.state.inputValue} onChange={this._handleChange}/>
      </header>
    )
  }
}

export default InputForm
