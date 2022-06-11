import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { detailsOrder } from "../actions/orderActions";

import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const OrderScreen = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state?.orderDetails);
  const { order, loading, error } = orderDetails;
  useEffect(() => {
    dispatch(detailsOrder(id));
  }, [id, dispatch]);
  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <h1>Order No: {order._id}</h1>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Shipping</h2>
                <p>
                  <strong>Name : </strong>
                  {order.shippingAddress.fullName}
                  <br />
                  <strong>Address : </strong>
                  {order.shippingAddress.address},{order.shippingAddress.city},
                  {order.shippingAddress.postalCode},
                  {order.shippingAddress.country}
                </p>
                {order.isDeliverd?<MessageBox variant='success' >Delivered at  {order.deliveredAt}</MessageBox >:<MessageBox variant='danger' >Not Delivered</MessageBox>}
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Payment</h2>
                <p>
                  <strong>Payment Method : </strong>
                  {order.paymentMethod}
                </p>
                {order.ispaid?<MessageBox variant='success' >Paid at  {order.paiddAt}</MessageBox >:<MessageBox variant='danger' >Not Paid</MessageBox>}
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Order Items</h2>
                <ul>
                  {order.orderItems.map((item, index) => (
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
                  <div className="">${order.itemsPrice}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div className="">Shipping</div>
                  <div className="">${order.shippingPrice}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div className="">Tax</div>
                  <div className="">${order.taxPrice}</div>
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
                    <strong> ${order.totalPrice}</strong>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderScreen;
