import React, { Component } from 'react';
import Lesson from './Lesson.jsx'
import './App.scss';
import lessons from '../data.js'

class App extends Component {

  state = {
    lessonNumber: 1,
    isLoading: false,
    lessons: []
  }

  _handleStart = () => {
    this.setState({ lessonNumber: this.state.lessonNumber + 1 })
  }

  componentWillMount() {
    this.setState({ isLoading: true })
  }

  componentDidMount() {
    this.setState({ lessons }, () => {
      this.setState({ isLoading: false })
    })
  }

  render() {
    const { lessons, lessonNumber } = this.state;
    let lessonDisplay = null;

    if(!this.state.isLoading) {
      lessonDisplay = <Lesson lessonNumber={lessonNumber} lesson={lessons[lessonNumber - 1]} />
    }

    return (
      <section className="App">
        <header className="App-header">
          <h1 className="App-name">/ Regex /</h1>
          <p className="App-tagline">Learn Regular Expressions</p>
          <div className="App-btn-container">
            <a className="App-btn" href="#Lesson" role="button" onClick={this._handleStart}>Learn</a>
            <a className="App-btn" href="#Lesson" role="button" onClick={this._handleStart}>Sandbox</a>
          </div>
        </header>
        {lessonDisplay}
      </section>
    );
  }
}

export default App;
