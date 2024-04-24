import React from "react";
// import logo from './logo.svg';
import './App.css';

import { Product } from "./Product";

function App() {



const data = [
  {
  name: "iPhone 15",
  price: 2000,
  inStock: true,
},
{
  name: "iPhone 14",
  price: 1499,
  inStock: true,
},
{
  name: "iPhone 13",
  price: null,
  inStock: false,
},
];

const list = data
.filter((item) => item.inStock)
.map((item) => <Product product={item}/>);
  
  return (
    <div className="App">
      <h1>Сторінка продукту</h1>
      {list}
    </div>
  );
}

export default App;
