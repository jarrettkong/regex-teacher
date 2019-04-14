import React, { Component } from 'react'
import './Lesson.scss';
import RegexForm from './RegexForm.jsx'

class Lesson extends Component {
  render() {
    const { lesson, lessonNumber } = this.props;
    return (
      <section className="Lesson" id="Lesson">
        <h2 className="Lesson-header">Lesson {lessonNumber}</h2>
        <div className="Lesson-grid">
          <section className="Lesson-instructions Lesson-container">
            <h3 className="Lesson-prompt">Regex: <span className="Lesson-text Lesson-regex">{lesson.regex}</span></h3>
            <h3 className="Lesson-prompt">Uses: <span className="Lesson-text">{lesson.instructions}.</span></h3>
            <h3 className="Lesson-prompt">Prompt: <span className="Lesson-text">{lesson.prompt}.</span></h3>
          </section>
          <section className="Lesson-inputs Lesson-container">
            <RegexForm />
            <p>Samples</p>
            <ol className="Lesson-samples">
              {lesson.examples.map(ex => <li className="Lesson-example">{ex}</li>)}
            </ol>
          </section>
        </div>
      </section>
    )
  }
}

export default Lesson;