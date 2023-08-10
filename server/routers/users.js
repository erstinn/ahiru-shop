import {Router} from "express";
import mongoose from "mongoose";
import {getUser} from "../middleware/user.js";

const router = Router ();
mongoose.set("strictQuery", false);

router.get('/', getUser, async (req,res) => {
    try {
        res.json({users : []})
    } catch (e) {
        console.log(e);
    }
});




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