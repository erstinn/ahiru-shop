import {Router} from "express";
import mongoose from "mongoose";
import {getUser} from "../middleware/users.js";
import User from "../models/User.js";

const router = Router ();
mongoose.set("strictQuery", false);

router.get('/', getUser, async (req,res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (e) {
        console.log(e);
    }
});

router.get('/:id', async (req,res) => {
    try {
        const user = await User.findById(req.params.id)
        if (user === null)
            return res.status(404).json({message: 'User not found'})
        res.json(user)
    } catch (e) {
        console.log(e)
    }
})

router.post('/', async (req,res) => {
    try {
        res.json({users : []})
    } catch (e) {
        console.log(e);
    }
});


router.patch('/:id', async (req,res) => {
    try {
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