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
    backgroundColor: "yellow",
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={style}>This is my name  {obj.name} and id {obj.id} and age is {obj.age} </p>
      </header>
    </div>
  );
}

export default App;
