import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home.jsx'
import Learn from './Learn.jsx'
import Sandbox from './Sandbox.jsx'
import './App.scss';

class App extends Component {

  render() {

    return (
      <section className="App" id="App">
        <Router>
          <Switch>
            <Route exact path='/' render={() => <Home />}/>
            <Route path='/learn' render={() => <Learn />} />
            <Route path='/sandbox' render={() => <Sandbox />} />
          </Switch>
        </Router>
      </section>
    );
  }
}

export default App;
