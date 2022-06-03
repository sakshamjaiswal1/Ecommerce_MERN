import express from "express";
import dotenv from "dotenv";
import data from "./data.js";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";

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

app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});
app.use("/api/users", userRouter);
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
