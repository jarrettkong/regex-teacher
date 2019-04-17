import React from 'react'
import { NavLink } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  return (
    <header className="Home-header">
      <h1 className="Home-name">/ Regex /</h1>
      <p className="Home-tagline">Learn Regular Expressions</p>
      <nav className="Home-btn-container">
        <NavLink to="/learn" className="App-btn">Learn</NavLink>
        <NavLink to="/sandbox" className="App-btn">Sandbox</NavLink>
        <p>Work in Progress</p>
      </nav>
    </header>
  )
}

export default Home;