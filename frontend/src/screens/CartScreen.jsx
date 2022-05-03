import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { addToCart } from "../actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { id: productId } = params;
  const { search } = useLocation();
  const qtyUrl = new URLSearchParams(search).get("qty");
  const qty = qtyUrl ? Number(qtyUrl) : 1;
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [productId, qty, dispatch]);
  return (
    <div>
      <h1>Cart screen</h1>
      <p>
        Add to cart :ProductID:{productId} Qty={qty}
      </p>
    </div>
  );
};

export default CartScreen;
