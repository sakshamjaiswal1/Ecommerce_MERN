import bcrypt from "bcryptjs";
import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import User from "../models/userModel.js";
import { generateToken } from "../utils.js";

const userRouter = express.Router();

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid Username or Password" });
  })
);
userRouter.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
   const  {name,email,password} = req.body
    if(name &&email &&password){
        const user = new User({
            name: name,
            email: email,
            password: bcrypt.hashSync(password, 8),
          });
      
          const createdUser = await user.save()
          res.send({
              _id: createdUser._id,
              name: createdUser.name,
              email: createdUser.email,
              isAdmin: createdUser.isAdmin,
              token: generateToken(createdUser)
      
          })
    }
    else{
        res.status(422).send({message:"Please enter the details correctly"})
    }
  
  })
);

export default userRouter;
