import React, { Component } from 'react'
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <aside className="Nav">
        <div className="Nav-container">
          <a href="#App" className="home-icon Nav-icon"><i className="material-icons">home</i></a>
          <p>Home</p>
        </div>
        <div className="Nav-container">
          <button className="reset-icon Nav-icon" onClick={this.props.resetProgress}><i className="material-icons">loop</i></button>
          <p>Reset</p>
        </div>
        <div className="Nav-container">
          <a href="https://i.imgur.com/Wn8eOKG.png" target="_blank" rel="noopener noreferrer" className="help-icon Nav-icon"><i className="material-icons">help_outline</i></a>      
          <p>Help</p>
        </div>
      </aside>
    )
  }
}

export default Nav;