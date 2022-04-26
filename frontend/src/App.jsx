import React from "react";
import data from "./data";
import Product from "./components/Product";
function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div className="">
          <a href="index.html" className="brand">
            Sakzon
          </a>
        </div>
        <div className="">
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {data.products.map((product, index) => (
         <Product product={product} index={index}  key={index}/>
          ))}
        </div>
      </main>
      <footer className="row center">All Rights Reserved</footer>
    </div>
  );
}

export default App;
