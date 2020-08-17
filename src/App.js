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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={style}>This is my name  {obj.name} and id {obj.id} and age is {obj.age} </p>
        <Person name="Shamol"></Person>
        <Person></Person>

      </header>
    </div>
  );
}

function Person(props) {
  const personStyle = {
    border: "2px solid yellow",
    margin: "10px",
    padding: "50px"
  }
  return (
    <div style={personStyle} >

      <h1>{props.name}</h1>
      <h3>Font End</h3>
    </div >
  )
}
export default App;
