
import React, { Component } from 'react';
import axios from 'axios';
import Author from './Person'
import '../styles/App.css';
import * as ReactBootstrap from 'react-bootstrap'
class PersonList extends Component {
  
  constructor(props){
    super(props);
    this.state = {
        persons : []
    }
  } 
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
      
    return (
      <ul>
        { this.state.persons.map(person => [<li class="lis">Name: {person.name}  <li class ="v"> Username: {person.username}</li> <li class = "v" >Email: {person.email}</li> </li>  ])}
        
      </ul>
    )
  }
}
export default PersonList;