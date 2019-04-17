import React, { Component } from 'react'
import RegexForm from './RegexForm.jsx'
import Nav from './Nav.jsx';
import './Lesson.scss';

class Lesson extends Component {

  checkAnswer = (pattern, flags) => {
    const { solutions } = this.props.lesson;
    const result = this.getResult(pattern, flags)
    if(result.toString() === solutions.toString()) {
      this.props.completeLesson();
    }
  }

  getResult = (pattern, flags) => {
    if(!pattern.length) {
      return;
    }
    const { cases } = this.props.lesson;
    const regex = new RegExp(pattern, flags);
    return cases.map(ex => regex.test(ex));
  }

  render() {
    const { lesson, lessonNumber, nextLesson } = this.props;
    const continueButton = <button className="Lesson-next-round App-btn" onClick={nextLesson}>Continue</button>
    let display;

    // TODO break into separate components
    if(this.props.lessonNumber <= 21) {
      display = <div className="Lesson-container">
                  <Nav resetProgress={this.props.resetProgress}/>
                  <h2 className="Lesson-header">Lesson {lessonNumber}</h2>
                  <div className="Lesson-grid">
                    <section className="Lesson-instructions Lesson-container">
                      <h3>Topic: <span className="Lesson-text">{lesson.topic}</span></h3>
                      <h3>Syntax: <span className="Lesson-text Lesson-code">{lesson.syntax}</span></h3>
                      <h3>Instructions: <span className="Lesson-text">{lesson.instructions}.</span></h3>
                      <h3>Problem: <span className="Lesson-text">{lesson.problem}</span></h3>
                      <RegexForm checkAnswer={this.checkAnswer} />
                      <h4 className="Lesson-reminder">NOTE: You will not need to include the // in your answer</h4>
                      {this.props.complete && continueButton}
                    </section>
                  </div>
                </div>
    } else {
      display = <div className="Lesson-complete-container">
                  <h1 className="Lesson-complete-text">Congratulations</h1>
                  <p>You have completed the course, if you would like more practice, you can click the reset button to start over.</p>
                  <button className="App-btn Lesson-btn" onClick={this.props.resetProgress}>Restart</button>
                </div>
    }

    return (
      <section className="Lesson" id="Lesson">
        {display}
      </section>
    )
  }
}

export default Lesson;