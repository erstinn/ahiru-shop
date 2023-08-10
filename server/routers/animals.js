import {Router} from "express";

const router = Router ();
import Animal from '../models/Animal.js';

router.get('/', async (req,res) => {
    try {
        const animals = await Animal.find();
        console.log('this is Farm output:', animals);
        res.json(animals)

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


router.put('/:id', async (req,res) => {
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