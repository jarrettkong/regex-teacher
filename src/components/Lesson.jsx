import React, { Component } from 'react'
import './Lesson.scss';
import RegexForm from './RegexForm.jsx'

class Lesson extends Component {

  state = {
    complete: false
  }

  checkAnswer = (body, flags) => {
    const { cases, solutions } = this.props.lesson;
    const regex = new RegExp(body, flags);
    const result = cases.map(ex => regex.test(ex));
    if(result.toString() === solutions.toString()) {
      this.setState({ complete: true }, () => {
        console.log(this.state.complete)
      })
    }
  }

  componentDidMount() {
    console.log(this.state.complete)
  }

  render() {
    const { lesson, lessonNumber } = this.props;
    return (
      <section className="Lesson" id="Lesson">
        <div className="Lesson-container">
          <h2 className="Lesson-header">Lesson {lessonNumber}</h2>
          <div className="Lesson-grid">
            <section className="Lesson-instructions Lesson-container">
              <h3>Topic: <span className="Lesson-text">{lesson.topic}</span></h3>
              <h3>Regex: <span className="Lesson-text Lesson-code">{lesson.regex}</span></h3>
              <h3>Uses: <span className="Lesson-text">{lesson.instructions}.</span></h3>
              <h3>Prompt: <span className="Lesson-text">{lesson.prompt}.</span></h3>
              <RegexForm checkAnswer={this.checkAnswer}/>
              <h4 className="Lesson-reminder">NOTE: You will not need to include the // in your answer</h4>
              {this.state.complete && <button className="Lesson-next-round App-btn" onClick={this.props.nextLesson}>Continue</button>}
            </section>
          </div>
        </div>
      </section>
    )
  }
}

export default Lesson;