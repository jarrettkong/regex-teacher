import React, { Component } from 'react'
import './Lesson.scss';
import RegexForm from './RegexForm.jsx'

class Lesson extends Component {
  render() {
    const { lesson, lessonNumber } = this.props;
    return (
      <section className="Lesson" id="current-lesson">
        <h2 className="Lesson-header">Lesson {lessonNumber}</h2>
        <h3 className="Lesson-prompt">Regex: <span className="Lesson-text Lesson-regex">{lesson.regex}</span></h3>
        <h3 className="Lesson-prompt">Regex: <span className="Lesson-text">{lesson.instructions}.</span></h3>
        <h3 className="Lesson-prompt">Prompt: <span className="Lesson-text">{lesson.prompt}.</span></h3>
        <RegexForm />
      </section>
    )
  }
}

export default Lesson
