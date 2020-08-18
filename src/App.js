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
  const product = [
    { name: "PhotoShop", price: "$90.99" },
    { name: "Illastrator", price: "$60.99" }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/* <Product name={product[0].name} price={product[1].price} ></Product> */}
        <Product product={product[0]}></Product>
        <Product product={product[1]}></Product>
        <p style={style}>This is my name  {obj.name} and id {obj.id} and age is {obj.age} </p>
        <Person name="Shamol" lastName="Mojumder"></Person>
        <Person name="Dipu" lastName="Mojumder"></Person>
        <Person name={names[0]} lastName="Mojumder"></Person>{/* name added from array */}
      </header>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: "1px solid gray",
    broderRadious: "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
    float: 'left'
  }
  const { name, price } = props.product
  return (
    <div style={productStyle}>
      <h3>{name} </h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
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