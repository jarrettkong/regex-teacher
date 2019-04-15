import React, { Component } from 'react';
import Lesson from './Lesson.jsx'
import './App.scss';
import lessons from '../data.js'

class App extends Component {

  state = {
    lessonNumber: 1,
    complete: false,
    isLoading: false,
    lessons: []
  }

  completeLesson = () => {
    this.setState({ complete: true });
  }

  nextLesson = () => {
    this.setState({ 
      lessonNumber: this.state.lessonNumber + 1, 
      complete: false,
    })
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
    const { lessons, lessonNumber, complete } = this.state;
    let lessonDisplay = null;

    if(!this.state.isLoading) {
      lessonDisplay = <Lesson lessonNumber={lessonNumber} lesson={lessons[lessonNumber - 1]} nextLesson={this.nextLesson} completeLesson={this.completeLesson} complete={complete} />
    }

    return (
      <section className="App">
        <header className="App-header">
          <h1 className="App-name">/ Regex /</h1>
          <p className="App-tagline">Learn Regular Expressions</p>
          <div className="App-btn-container">
            <button className="App-btn"><a href="#Lesson" role="button">Learn</a></button>
            <button className="App-btn" disabled>Sandbox</button>
            <p>Coming Soon</p>
          </div>
        </header>
        {lessonDisplay}
      </section>
    );
  }
}

export default App;
