import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      input:"",
      array:["chicken","cow","pineapples","pig","dino"]
    }
    this.inputChange = this.inputChange.bind(this)
  }
  inputChange(event){
    let {name,value} = event.target;
    this.setState({
      [name]:value
    })
  }
  render() {
    let newArray = []
    this.state.array.map((item,i)=>{
      if(item.includes(this.state.input)){
        return newArray.push(<h2>{item}</h2>);
      }
      else{
        return false;
      }
    })
    return (
      <div className="App">
        <input type="text" name="input" onChange={this.inputChange}/>
        {newArray}
      </div>
    );
  }
}

export default App;
