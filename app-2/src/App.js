import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      listArray: ["Table", "Computer", "Mice","Headphones"]
    }
  }
  render() {
    let displayList = this.state.listArray.map((item,index)=>(
      <h2 key ={index}>{item}</h2>
    ))
    return (
      <div className="App">
        {displayList}
      </div>
    );
  }
}

export default App;
