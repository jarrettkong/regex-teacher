import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <aside className="Nav">
        <NavLink to='/' className="home-icon Nav-icon"><i className="material-icons">home</i></NavLink>
        <button className="reset-icon Nav-icon" onClick={this.props.resetProgress}><i className="material-icons">loop</i></button>
        <a href="https://i.imgur.com/Wn8eOKG.png" target="_blank" rel="noopener noreferrer" className="help-icon Nav-icon"><i className="material-icons">help_outline</i></a>   
      </aside>
    )
  }
}

export default Nav;