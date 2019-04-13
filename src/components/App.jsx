import React, { Component } from 'react';
import RegexForm from './RegexForm.jsx';
import './App.scss';

class App extends Component {
  render() {
    return (
      <header className="App">
        <h1>/ Regex /</h1>
        <RegexForm />
      </header>
    );
  }
}

export default App;
