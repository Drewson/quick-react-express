import React, { Component } from 'react';
import './App.css';

class App extends Component {


  componentDidMount(){
    fetch('localhost:3001/auth/secretfish')
      .then( response => response.json())
      .then( data => console.log(data))
      .catch(err => console.log)
  }

  render() {
    return (
      <div className="App">
        <p>test</p>
      </div>
    );
  }
}

export default App;
