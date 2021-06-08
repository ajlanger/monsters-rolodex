import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'acds'
        },
        {
          name: 'Dracula',
          id: 'dfssdff'
        },
        {
          name: 'Zombie',
          id: '12ed'
        },
        {
          name: 'Arnaud',
          id: '12edf'
        },
      ]
    };    
  }

  changeNameHandler = () => {
    const name =  this.state.string === 'Hello Benoit' ? 'Hello Arnaud' : 'Hello Benoit';
    this.setState({ string: name});
  }


  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(el => <h1 key={ el.id }>{ el.name }</h1>)
        }
      </div>
    );
  }
}

export default App;
