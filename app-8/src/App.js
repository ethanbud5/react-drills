import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends Component {
  constructor(){
    super();
    this.state = {
      planet:{
        name:"",
        population:"",
        climate:""
      }
    }
  }

  componentDidMount(){
    //https://opinionated-quotes-api.gigalixirapp.com/v1/quotes?rand=t&n=1
    axios.get("https://swapi.co/api/planets/8/")
      .then(res=>{
        this.setState({
          planet:res.data
        })
      })
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>Star Wars Planet</h1>
        <div>
          <h2>Name: {this.state.planet.name}</h2>
          <h4>Population: {this.state.planet.population}</h4>
          <h4>Climate: {this.state.planet.climate}</h4>
        </div>
      </div>
    );
  }
}

export default App;
