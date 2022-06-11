import React from "react";
import { useState, useEffect,useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { signin } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";



const SigninScreen = () => {
 
  const navigation = useRef(useNavigate())
  const {search} = useLocation()
  const searchSplit = search.split('=')[1]
  const redirect = search?`${searchSplit}`:`/`
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const userSignin = useSelector(state=>state.userSignin)
  const {loading,error,userInfo}=userSignin

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email,password))
 
   
    
  };
  useEffect(()=>{
 
    if(userInfo){
      navigation.current(redirect)
    }
  },[userInfo,navigation,redirect])

  return (
    <div className="">
      <form className="form" onSubmit={submitHandler}>
        <div className="">
          <h1>Sign In</h1>
        </div>
        {loading &&<LoadingBox/>}
        {error && <MessageBox variant="danger" >{error}</MessageBox>}
        <div className="">
          <label htmlFor="email">Email address</label>
          <input
            value={email}
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="">
          <label htmlFor="password"> Password</label>
          <input
            value={password}
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="">
          <label htmlFor="" />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
        <div className="">
          <label />
          <div className="">
            {" "}
            New customer? <Link to="/register">Create your account</Link>{" "}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SigninScreen;
