import React from 'react'

const CompletePage = (props) => {
  return (
    <div className="Lesson-complete-container">
      <h1 className="Lesson-complete-text">Congratulations</h1>
      <p>You have completed the course, if you would like more practice, you can click the reset button to start over.</p>
      <button className="App-btn Lesson-btn" id="resetButton" onClick={props.resetProgress}>Restart</button>
    </div>
  )
}

export default CompletePage;