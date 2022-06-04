import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const navigation = useRef(useNavigate());
  const { search } = useLocation();
  const searchSplit = search.split("=")[1];
  const redirect = search ? `/${searchSplit}` : `/register`;

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const submitHandler = (e) => {
    e.preventDefault();
    if(password===confirmPassword){
        dispatch(register(name, email, password));
    }
    else{
            alert("Password and Confirm Password do not match")
    }
   
  };
  useEffect(() => {
    if (userInfo) {
      navigation.current(redirect);
    }
  }, [userInfo, navigation, redirect]);

  return (
    <div className="">
      <form className="form" onSubmit={submitHandler}>
        <div className="">
          <h1>Register</h1>
        </div>
        {loading && <LoadingBox />}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div className="">
          <label htmlFor="email">Name</label>
          <input
            value={name}
            type="name"
            id="name"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
       
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
          <label htmlFor="confirmPassword"> Confirm Password</label>
          <input
            value={confirmPassword}
            type="password"
            id="confirmPassword"
            placeholder="Enter Confirm Password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="">
          <label htmlFor="" />
          <button className="primary" type="submit">
            Register
          </button>
        </div>
        <div className="">
          <label />
          <div className="">
            {" "}
            Already have an account? <Link to="/signin">Sign In</Link>{" "}
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterScreen;
