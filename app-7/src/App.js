import React, { Component } from 'react';
import './App.css';
import Todo from "./Todo"

class App extends Component {
  constructor(){
    super()
    this.state = {
      listArray: []
    }
    this.addTask = this.addTask.bind(this)
  }
  addTask(task){
    let newArray = this.state.listArray.slice();
    newArray.push(task);
    this.setState({
      listArray:newArray
    })
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <Todo 
          addHandler={this.addTask}
          array={this.state.listArray}
        />
      </div>
    );
  }
}

export default App;
