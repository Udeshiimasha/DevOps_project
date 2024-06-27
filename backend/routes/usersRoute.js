import express from "express";
import { User } from "../models/userModel.js";

const router = express.Router();

// Login Route
router.post("/g", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.send(user);
    } else {
      res.status(400).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Register Route
router.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400).json({ message: "Email is already in use" });
    } else {
      const newUser = new User({ email, password });
      await newUser.save();
      res.send("User registered successfully");
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;


// import express from 'express';
// import bcrypt from 'bcryptjs';
// import { User } from '../models/userModel.js';
// import jwt from 'jsonwebtoken'
// //import { mongoDBURL, PORT, JWT_SECRET, KEY } from '../config.js';

// const router = express.Router();
// const app = express();
// app.use(express.json());

// // Register a new user
// router.post('/register', async (req, res) => {
//     console.log('CORS configuration:', res.header('Access-Control-Allow-Origin'));
//     const { email, password } = req.body;

//     //try {
//     // Check if the user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//     return res.json({message:"User already exists"}) 
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create and save the new user
//     const user = new User({ email, password: hashedPassword });
//     await user.save();

//     // Respond with success message
//     return res.json({ status: true, message: 'User registered successfully' });
//     // } catch (error) {
//     //     // console.error(error);
//     //     res.status(500).json({ error: 'Server error' });
//     // }
// });

// // Login a user
// router.post('/login', async (req, res) => {
//     console.log('CORS configuration:', res.header('Access-Control-Allow-Origin'));
//     const { email, password } = req.body;

    
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.json({ message: 'User not found' });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.json({ message: 'Password is incorrect' });
//         }

//         // const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET , { expiresIn: '1h' });
//         // res.cookie( 'token', token, {httpOnly:true, maxAge:36000});
//         return res.json({status: true, message: 'Login successfully'});
    
// });

// export {router as UserRouter };
