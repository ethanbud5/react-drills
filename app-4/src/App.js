import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      username:"",
      password:""
    }
    this.inputChange = this.inputChange.bind(this);
    this.showInfo = this.showInfo.bind(this);
  }
  inputChange(event){
    let {name,value} = event.target
    this.setState({
      [name]:value
    })
  }
  showInfo(){
    let {username,password} = this.state;
    alert(`Username: ${username} Password: ${password}`);
  }
  render() {
    return (
      <div className="App">
        <input type="text" name="username" onChange={this.inputChange}/>
        <input type="text" name="password" onChange={this.inputChange}/>
        <button onClick={this.showInfo}>Login</button>
      </div>
    );
  }
}

export default App;
