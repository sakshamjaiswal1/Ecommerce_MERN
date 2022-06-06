import React from "react";
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

const PaymentMethodScreen = () => {
  const navigation = useRef(useNavigate());
  const dispatch = useDispatch()
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod))
    navigation.current("/placeorder");    

  };
  useEffect(() => {
    const shippingAddress = JSON.parse(localStorage.getItem("shippingAddress"));

    if (!shippingAddress) {
      navigation.current("/shipping");
    }
  }, []);
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div className="">
          <h1>Payment Method</h1>
        </div>
        <div className="">
          <div className="">
            <input
              type="radio"
              value="PayPal"
              onChange={(e) => setPaymentMethod(e.target.value)}
              placeholder="Enter full Name"
              name="paymentMethod"
              required
              
            ></input>
            <label htmlFor="PayPal">Pay Pal</label>
          </div>
        </div>
        <div className="">
          <div className="">
            <input
              type="radio"
              value="Stripe"
              id="Stripe"
              onChange={(e) => setPaymentMethod(e.target.value)}
              placeholder="Enter address"
              name="paymentMethod"
              required
            />
            <label htmlFor="Stripe">Stripe</label>
          </div>
        </div>

        <div className="">
          <label />
          <button type="submit" className="primary">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentMethodScreen;
