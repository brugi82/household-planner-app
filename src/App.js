import React, { Component } from 'react';
import Header from './components/common/Header';
import RegisterPage from './components/account/RegisterPage';
import LoginPage from './components/account/LoginPage';
import RegisterConfirmPage from './components/account/RegisterConfirmPage';
import {Route, Switch} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header username="test@test.com" />
        <Switch>
          <Route exact path="/" component={LoginPage}/>
          <Route path="/register" component={RegisterPage}/>
          <Route path="/registerconfirm" component={RegisterConfirmPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
