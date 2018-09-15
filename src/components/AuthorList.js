import React, { Component } from 'react';
import axios from 'axios';
import Author from './Author'
import '../styles/App.css';


class AuthorList extends Component {
  
  constructor(props){
    super(props);
    this.state = {
        authors : []
    }
  } 
  
  componentWillMount(){
      axios({
          method: 'get',
          url: 'https://dog.ceo/api/breeds/image/random',
      }).then(response => {
          console.log(response);
      });
  }
    
  render() {
      const authorList = this.state.authors.map((author)=>{
          <Author name={author.name} age={author.name} genre={author.genre}/>
      })
    return (
        <div>
            {authorList}
        </div>
    );
  }
}

export default AuthorList;