import {Router} from "express";
import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
// import jsonwebtoken;

const router = Router ();
mongoose.set("strictQuery", false);

router.get('/', async (req,res) => {
    try {
        const user = req.user;
        // res.status(200).json({ success: true, message: 'Login successful', token });
    } catch (e) {
        console.log(e);
    }
});


// router.get('/:id', async (req,res) => {
//     try {
//         const user = await User.findById(req.params.id)
//         if (user === null)
//             return res.status(404).json({message: 'User not found'})
//         res.json(user)
//     } catch (e) {
//         console.log(e)
//     }
// })

//ノート： patch: 特定なフィールドを変えるときにしか使わない ; put：レコードの全部を更新するとき
router.post('/login', async (req,res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username: username});
        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid username' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
        if (!isPasswordValid)
            return res.status(401).json({ success: false, message: 'Invalid password' });

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        delete user.password;
        res.status(200).json({ success: true, message: 'Login successful', token});
    } catch (e) {
        res.status(500).json({ success: false, message: 'Error logging in' });
    }
});

router.post('/register', async (req,res) => {
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
});


router.patch('/', async (req,res) => {
    try {
        const user = await User.findOneAndUpdate({_id: req.params.id}, )

        res.json({users : []})
    } catch (e) {
        console.log(e);
    }
});


router.delete('/:id', async (req,res) => {
    try {
        res.json({user : []})
    } catch (e) {
        console.log(e);
    }
});

export default router;