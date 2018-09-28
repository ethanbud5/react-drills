import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from "./Image"

class App extends Component {
  constructor(){
    super()
    this.state = {
      imgUrl:""
    }
    this.imgChange = this.imgChange.bind(this)
  }
  imgChange(event){
    let {name,value} = event.target;
    this.setState({
      [name]:value
    })
  }
  render() {
    return (
      <div className="App">
        <input type="text" placeholder="Image URL" name="imgUrl" onChange={this.imgChange}/>
        <div>
          <Image img={this.state.imgUrl}/>
        </div>
      </div>
    );
  }
}

export default App;
