import React, { Component } from 'react';
import '../styles/App.css';

class Person extends Component {
  
    
  render() {
    return (
      <div>
        <label>Author name: {this.props.name}</label><br/>
        <label>Author age: {this.props.username}</label><br/>
        <label>Author genre: {this.props.email}</label><br/>
      </div>
    );
  }
}

export default Person;
