import React from "react";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { BrowserRouter, Route,Routes} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>

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
     <Routes>
          <Route path="/" element={<HomeScreen/>} exact></Route>
        <Route path="/product/:id" element={<ProductScreen/>}></Route>
        </Routes>
       
        </main>
      
        <footer className="row center">
       All Rights Reserved
       
       </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;