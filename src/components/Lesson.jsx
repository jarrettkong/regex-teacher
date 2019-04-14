import React, { Component } from 'react'
import './Lesson.scss';
import RegexForm from './RegexForm.jsx'

class Lesson extends Component {

  checkAnswer = (body, flags) => {
    const regex = new RegExp(body, flags);
    console.log(regex);
  }

  render() {
    const { lesson, lessonNumber } = this.props;
    return (
      <section className="Lesson" id="Lesson">
        <h2 className="Lesson-header">Lesson {lessonNumber}</h2>
        <div className="Lesson-grid">
          <section className="Lesson-instructions Lesson-container">
            <h3>Topic: <span className="Lesson-text">{lesson.topic}</span></h3>
            <h3>Regex: <span className="Lesson-text Lesson-code">{lesson.regex}</span></h3>
            <h3>Uses: <span className="Lesson-text">{lesson.instructions}.</span></h3>
            <h3>Prompt: <span className="Lesson-text">{lesson.prompt}.</span></h3>
          {/* </section> */}
          {/* <section className="Lesson-inputs Lesson-container"> */}
            <RegexForm checkAnswer={this.checkAnswer}/>
            <h4 className="Lesson-reminder">NOTE: You will not need to include the // in your answer</h4>
          </section>
        </div>
      </section>
    )
  }
}

export default Lesson;