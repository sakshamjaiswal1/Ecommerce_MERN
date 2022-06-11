import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModel";
import { isAuth } from "../utils";

const orderRouter = express.Router()

orderRouter.post('/',isAuth,expressAsyncHandler(async (req,res)=>{
    if(req.body.orderItems.lenght===0){
        res.status(400).send({message:"Cart is empty"})

    }
    else{
        const order = new Order({
            orderIems:req.body.orderItems,
            shippingAddess:req.body.shippingAddess,
            paymentMethod:req.body.paymentMethod,
            itemsPrice:req.body.itemsPrice,
            shippingPrice:req.body.shippingPrice,
            taxPrice:req.body.taxPrice,
            totalPrice:req.body.totalPrice,
            user:req.user._id,



        })
        const  createdOrder = await order.save()
        res.status(201).send({message:"New Order Created",order:createdOrder})
    }
}))