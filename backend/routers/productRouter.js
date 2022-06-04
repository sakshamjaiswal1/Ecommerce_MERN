import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Product from "../models/productModel.js";

const productRouter=express.Router()

productRouter.get('/',
expressAsyncHandler(async(req,res)=>{
    const products = await Product.find({})
    res.status(200).send(products)
})
)

productRouter.get('/seed',
expressAsyncHandler(async (req,res)=>{
    const createdProducts= await Product.insertMany(data.products)
    res.status(200).send(createdProducts)
})
)

productRouter.get('/:id',

expressAsyncHandler(async (req,res)=>{
    const product = await Product.findById(req.params.id)
    if(product){
        res.status(200).send(product)
    }
    else{
        res.status(404).send({message:"Product not found"})
    }
})
)

export default productRouter
