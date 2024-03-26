import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
   try {
      const {username, password} = req.body;
      const user = await User.findOne({username: username});
      if (!user) {
         return res.status(401).json({ success: false, message: 'Invalid username' });
      }
      const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
      if (!isPasswordValid)
         return res.status(401).json({ success: false, message: 'Invalid password' });

      const token = jwt.sign({id: user._id, username: user.username}, process.env.JWT_SECRET, {expiresIn: '1h'});
      delete user.password;
      res.status(200).json({ success: true, message: 'Login successful', token});
   } catch (e) {
      res.status(500).json({ success: false, message: 'Error logging in' });
   }
}

export const register = async (req, res) => {
   try {
      const {username, password, email, firstName, lastName} = req.body;

      const hashedPW = bcrypt.hash(password, 20, (err, hash) => {
         if (err) {
            console.error('Failed hash: ', err)
            res.status(500).json({ success: false, message: 'An error occurred during registration' });
         }
         console.log('hash', hash)
      })
      const newUser = new User({
         email: email,
         username: username,
         passwordHash: hashedPW,
         firstName: firstName, lastName: lastName,
         paymentMethod: { //default as registered user
            method: 'cod',
         },
         profilePic: '/assets/icons/profile.png', //default
         preferences: {
            theme: 'light',
            language: 'en'
         }
      });
      const registeredUser = await newUser.save().then(user =>{
         const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
         res.status(200).json({ success: true, message: 'Login successful', token});
      });
      res.status(201).json(registeredUser);
   } catch (e) {
      res.status(500).json({ success: false, message: 'An error occurred during registration' });
   }
}