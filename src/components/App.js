import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import '../styles/App.css';
import AuthorList from './AuthorList';

import {Link} from 'react-router-dom';

import {Button} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://image.flaticon.com/icons/svg/843/843279.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">Lista de personas del api : https://jsonplaceholder.typicode.com/users</h1> 
          <Link to='/'></Link>
           <Link to='/authorList'></Link>
          <Link to='/authorCreation'></Link>
          <button> <Link to='/personList'>Person list</Link> </button>
        </header>
      </div>
    );
  }
}

export default App;
