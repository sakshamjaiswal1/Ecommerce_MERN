import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";

const PlaceOrderScreen = () => {
  const navigation = useRef(useNavigate());
  const cart = useSelector((state) => state.cart);
  const shippingAddress = JSON.parse(localStorage.getItem("shippingAddress"));
  const paymentMethod = JSON.parse(localStorage.getItem("paymentMethod"));
  const { cartItems } = cart;
  const toPrice = (num) => Number(num.toFixed(2));
  cart.itemPrice = toPrice(cartItems.reduce((a, c) => a + c.qty * c.price, 0));
  cart.shippingPrice = cart.itemPrice > 100 ? toPrice(0) : toPrice(10);
  cart.taxPrice = toPrice(cart.itemPrice * 0.15);
  cart.totalPrice = cart.itemPrice + cart.shippingPrice + cart.taxPrice;
  const placeOrderHandler=()=>{

  }
  useEffect(() => {
    if (!shippingAddress) {
      navigation.current("/shipping");
    }
    if (cart.cartItems.length === 0) {
      navigation.current("/");
    }
  }, [shippingAddress, cart]);
  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Shipping</h2>
                <p>
                  <strong>Name : </strong>
                  {shippingAddress.fullName}
                  <br />
                  <strong>Address : </strong>
                  {shippingAddress.address},{shippingAddress.city},
                  {shippingAddress.postalCode},{shippingAddress.country}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Payment</h2>
                <p>
                  <strong>Payment Method : </strong>
                  {paymentMethod}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Order Items</h2>
                <ul>
                  {cartItems.map((item, index) => (
                    <li key={item.product}>
                      <div className="row">
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>

                        <div>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h2>Order Summary</h2>
              </li>
              <li>
                <div className="row">
                  <div className="">Items</div>
                  <div className="">${cart.itemPrice}</div>
                </div>
                </li>
                <li>
                <div className="row">
                  <div className="">Shipping</div>
                  <div className="">${cart.shippingPrice}</div>
                </div>
                </li>
                <li>
                <div className="row">
                  <div className="">Tax</div>
                  <div className="">${cart.taxPrice}</div>
                </div>
                </li>
                <li>
                <div className="row">
                  <div className="">
                    {" "}
                    <strong>Order Total</strong>{" "}
                  </div>
                  <div className="">
                    {" "}
                    <strong> ${cart.totalPrice}</strong>
                  </div>
                </div>
              </li>
              <li>
                  <button type="button" className="primary block"  onClick={placeOrderHandler} disabled={cart.cartItems.length===0} > Place Order </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderScreen;
