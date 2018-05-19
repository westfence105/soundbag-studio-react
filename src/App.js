import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route, Switch,
} from 'react-router-dom';

import './App.css';

import MainTitlePage from './pages/MainTitlePage';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">soundbag studio</h1>
            </header>
            <div className="App-body">
                <Switch>
                    <Route exact path="/" component={ MainTitlePage } />
                </Switch>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
