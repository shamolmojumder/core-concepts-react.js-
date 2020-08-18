import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const obj = {
    id: 10,
    name: "Shamol",
    age: 22,

  }

  const style = {
    color: "white",
    backgroundColor: "black",
  }
  const names = ["Shomoy"]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={style}>This is my name  {obj.name} and id {obj.id} and age is {obj.age} </p>
        <Person name="Shamol" lastName="Mojumder"></Person>
        <Person name="Dipu" lastName="Mojumder"></Person>
        <Person name={names[0]} lastName="Mojumder"></Person>{/* name added from array */}
      </header>
    </div>
  );
}

function Person(props) {  //must be Capital Letter {Person}
  const personStyle = {
    border: "2px solid yellow",
    margin: "10px",
    padding: "50px"
  }
  return (
    <div style={personStyle}>
      <h1>My name is {props.name} last name is {props.lastName}</h1>
      <h3>Font End</h3>
    </div >
  )
}
export default App;
