import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  // const obj = {
  //   id: 10,
  //   name: "Shamol",
  //   age: 22,

  // }

  // const style = {
  //   color: "white",
  //   backgroundColor: "black",
  // }
  // const names = ["Shomoy", "Dipu", "SHamol"]

  // const fullName = names.map(name => name)
  // console.log(fullName);
  const products = [
    { name: "PhotoShop", price: "$90.99" },
    { name: "Illastrator", price: "$60.99" },
    { name: "PDF reader", price: "$06.99" },
    { name: "Primer Pro", price: "$240.99" }
  ]

  // const productNames = product.map(product => product.name)
  // console.log(productNames);
  const friendArry = [
    { name: "shamol", age: 23 },
    { name: "Dipu", age: 24 },
    { name: "Shomoy", age: 21 }
  ]
  const nayoks = ["Jony", "tom", "jerry", "Kutta", "Nobita", "Doremon"]
  const nayokName = nayoks.map(nayok => nayok)
  // console.log(nayokName);
  return (
    <div className="App">
      <header className="App-header">

        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li> {nayok} </li>)
          }
          <li>{nayoks[0]}</li>
        </ul>

        <ul>
          {products.map(product => <li>{product.name}</li>)}
        </ul>


        {
          products.map(pd => <Product product={pd}></Product>)
        }

        {
          friendArry.map(friend => <Product product={friend}></Product>)
        }

        {
          friendArry.map(friend => <Person person={friend}></Person>)
        }

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}

        {/* <Product name={product[0].name} price={product[1].price} ></Product> */}
        {/* <Product product={product[0]}></Product>
        <Product product={product[1]}></Product>
        <p style={style}>This is my name  {obj.name} and id {obj.id} and age is {obj.age} </p>
        <Person name="Shamol" lastName="Mojumder"></Person>
        <Person name="Dipu" lastName="Mojumder"></Person>
        <Person name={names[0]} lastName="Mojumder"></Person>name added from array */}


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


function Users() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>Dynamic Users{setUsers.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name})</li>)
        }
      </ul>
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
      <h1>My name is {props.friend}</h1>
      <h3>Font End</h3>
    </div >
  )
}

function Counter() {
  const [count, setCount] = useState(10)
  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onMouseMove={handleClick}>Increse</button>
    </div>
  )
}
export default App;