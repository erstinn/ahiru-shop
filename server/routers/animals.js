import {Router} from "express";
import Animal from '../models/Animal.js';
import {getAnimal} from "../middleware/animals.js";
const router = Router ();

router.get('/', async (req,res) => {
    try {
        const animals = await Animal.find();
        console.log('this is Farm output:', animals);
        res.json(animals)

    } catch (e) {
        console.log(e);
    }
});
router.get('/:id', getAnimal, async (req, res) => {
    try {
        // const id = req.params.id;

    } catch (e) {
        console.log(e);
    }
});

router.delete('/:id', getAnimal, async(req, res) => {
    try {

    }   catch (e) {
        
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