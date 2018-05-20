import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route, Switch, Link
} from 'react-router-dom';

import './App.css';

import HeaderLink from './components/HeaderLink';
import MainTitlePage from './pages/MainTitlePage';
import AboutPage from './pages/AboutPage';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <header className="App-header">
              <Link to="/" className="App-title">soundbag studio</Link>
              <div className="pad"></div>
              <ul className="head-nav">
                <HeaderLink page="about" />
                <HeaderLink page="profile" />
                <HeaderLink page="engineer" />
                <HeaderLink page="music" />
                <HeaderLink page="contact" />
              </ul>
            </header>
            <div className="App-body">
                <Switch>
                    <Route exact path="/" component={ MainTitlePage } />
                    <Route exact path="/about" component={ AboutPage } />
                </Switch>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
