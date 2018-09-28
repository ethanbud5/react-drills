import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      input:""
    }
    this.inputChange = this.inputChange.bind(this)
  }
  inputChange(event){
    let {name,value} = event.target;
    this.setState({
      [name]:value
    });
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <input type="text" placeholder="Text" name="input" onChange={this.inputChange}/>
        <div>{this.state.input}</div>
      </div>
    );
  }
}

export default App;
