import React, { Component } from 'react';
import './App.css';
import Todo from "./Todo"

class App extends Component {
  constructor(){
    super()
    this.state = {
      listArray: [],
      input:""
    }
    this.addTask = this.addTask.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }
  addTask(e){
    let newArray = this.state.listArray.slice();
    newArray.push(this.state.input);
    e.target.value = ""
    this.setState({listArray:newArray,input:""})
  }
  inputChange(event){
    let {name,value} = event.target;
    this.setState({
      [name]:value
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <input type="text" name="input" placeholder="Enter new task" value={this.state.input} onChange={this.inputChange}/>
        <button onClick={this.addTask}>Add</button>
        <Todo array = {this.state.listArray}/>
      </div>
    );
  }
}

export default App;
