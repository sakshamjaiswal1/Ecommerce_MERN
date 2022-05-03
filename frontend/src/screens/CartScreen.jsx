import React from 'react'
import { useLocation, useParams } from 'react-router-dom'


const CartScreen = () => {
 const params = useParams()
 const {id:productId}= params
 const {search}= useLocation()
 const qtyUrl = new URLSearchParams(search).get('qty')
 const qty = qtyUrl?Number(qtyUrl):1
    return (
    <div>
        <h1>Cart screen</h1>
        <p>Add to cart :ProductID:{productId}  Qty={qty}</p>
    </div>
  )
}

export default CartScreen