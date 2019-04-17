import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.jsx'
import Learn from './Learn.jsx'
import './App.scss';

class App extends Component {

  render() {

    return (
      <section className="App" id="App">
        <Switch>
          <Route exact path='/' render={() => <Home />}/>
          <Route path='/learn' render={(props) => (
            <Learn />
          )} />
        </Switch>
      </section>
    );
  }
}

export default App;
