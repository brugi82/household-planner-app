import React, { Component } from 'react';
import Header from './components/common/Header';
import TextInput from './components/common/TextInput';
import PasswordInput from './components/common/PasswordInput';
import LoginForm from './components/account/LoginForm';
import RegisterForm from './components/account/RegisterForm';
import {Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header username="test@test.com" />
        <Route exact path="/" component={LoginForm}/>
        <Route path="/register" component={RegisterForm}/>
      </div>
    );
  }
}

export default App;
