import React from "react";
import SigninScreen from "./screens/SigninScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import { useSelector ,useDispatch} from "react-redux";
import { signout } from "./actions/userActions";
import { useEffect } from "react";
function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector(state=>state.userSignin)
  const {userInfo} = userSignin
  const dispatch = useDispatch()
  const signoutHandler=()=>{
      dispatch(signout())
  }
  useEffect(()=>{

  },[cart])
  

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div className="">
            <Link to="/" className="brand">
              Sakzon
            </Link>
          </div>
          <div className="">
            <Link to="/cart/:id">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {
              userInfo?<div className="dropdown" >
                  <Link to="#" >{userInfo.name} <i className="fa fa-caret-down"></i></Link>
                  <ul className="dropdown-content" >
                    <li>
                      <Link to="#signout"  onClick={signoutHandler} >
                        Sign Out
                      </Link>
                    </li>
                  </ul>
              </div>: <Link to="/signin">Sign In</Link>
            }
           
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/cart/:id" element={<CartScreen />}></Route>
            <Route path="/" element={<HomeScreen />} exact></Route>
            <Route path='/signin' element={<SigninScreen/>}></Route>
            <Route  path='register' element={<RegisterScreen/>}  ></Route>
            <Route path="/product/:id" element={<ProductScreen />}></Route>
          </Routes>
        </main>

        <footer className="row center">All Rights Reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
