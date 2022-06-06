import React from "react";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";
import { saveShippingAddress } from "../actions/cartActions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const ShippingAddressScreen = () => {
    const navigation = useRef(useNavigate())
  const userSignin = useSelector(state=>state.userSignin)
    const { userInfo}=userSignin
   
 
    const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const dispatch=useDispatch()
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({fullName,address,city,postalCode,country}))
 
    navigation.current('/payment')
  };
useEffect(()=>{
   

    if(!userInfo){
navigation.current('/signin')
}
const shippingAddress= JSON.parse( localStorage.getItem('shippingAddress'))

if(shippingAddress){
    setFullName(shippingAddress.fullName)
    setAddress(shippingAddress.address)
    setCity(shippingAddress.city)
    setPostalCode(shippingAddress.postalCode)
    setCountry(shippingAddress.country)

}
},[userInfo])

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div className="">
          <h1>Shipping Address</h1>
        </div>
        <div className="">
          <label htmlFor="fullName">Full Name</label>
          <input
          id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder='Enter full Name'
            required
          />
        </div>
        <div className="">
          <label htmlFor="address">Address</label>
          <input
          id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder='Enter address'
            required
          />
        </div>
        <div className="">
          <label htmlFor="city">City</label>
          <input
          id="city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder='Enter City'
            required
          />
        </div>
        <div className="">
          <label htmlFor="postalCode">Postal Code</label>
          <input
          id="postalCode"
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            placeholder='Enter Postal Code'
            required
          />
        </div>
        <div className="">
          <label htmlFor="country"> Country</label>
          <input
          country="country"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder='Enter Country'
            required
          />
        </div>
        <div className="">
          <label/>
          <button type="submit" className="primary" >Continue</button> 
         
        </div>
      </form>
    </div>
  );
};

export default ShippingAddressScreen;
