import express from "express";
import dotenv from "dotenv";

import productRouter from "./routers/productRouter.js";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";

dotenv.config();
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
mongoose.connect(
  process.env.MONGODB_URL ||
    "mongodb+srv://sakshamjaiswal1:789sakSHAM@cluster0.4w2j4oq.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);



app.use('/api/products',productRouter)
app.use("/api/users", userRouter);
app.use("/api/orders",orderRouter)
app.get('/api/config/paypal',(req,res)=>{
  res.send(process.env.PAYPAL_CLIENTID || 'sb')
})
app.get("/", (req, res) => {
  res.send("Server is ready");
});
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
