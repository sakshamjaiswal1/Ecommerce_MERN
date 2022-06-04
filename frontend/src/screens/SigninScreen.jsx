import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SigninScreen = () => {
const [email,setEmail]=useState('')
const [password,setPassword]= useState('')

const submitHandler=(e)=>{
    e.preventDefault()
}

    return (
    <div className="">
      <form className="form" onSubmit={submitHandler}>
        <div className="">
          <h1>Sign In</h1>
          </div>
          <div className="">
            <label htmlFor="email">Email address</label>
            <input
                value={email}
              type="email"
              id='email'
              placeholder="Enter email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="password">Email password</label>
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
              <label htmlFor=""/>
              <button className="primary" type="submit" >Sign In</button>
          </div>
          <div className="">
              <label />
              <div className=""> New customer? <Link to='/register'>Create your account</Link>  </div>
          </div>
     
      </form>
    </div>
  );
};

export default SigninScreen;
