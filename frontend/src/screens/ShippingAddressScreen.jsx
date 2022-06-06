import React from "react";
import { useState } from "react";
import CheckoutSteps from "../components/CheckoutSteps";

const ShippingAddressScreen = () => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };

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
