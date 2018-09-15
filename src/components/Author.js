import React, { Component } from 'react';
import '../styles/App.css';

class Author extends Component {
  
    
  render() {
    return (
      <div>
        <label>Author name: {this.props.name}</label><br/>
        <label>Author age: {this.props.age}</label><br/>
        <label>Author genre: {this.props.genre}</label><br/>
      </div>
    );
  }
}

export default Author;
