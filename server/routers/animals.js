import {Router} from "express";
import Animal from '../models/Animal.js';
import {getAnimal} from "../middleware/animals.js";
const router = Router ();

router.get('/', async (req,res) => {
    try {
        const animals = await Animal.find();
        // console.log('this is Farm output:', animals);
        res.json(animals)

    } catch (e) {
        console.log(e);
    }
});
router.get('/:id', async (req, res) => {
    try {
        const animal = await Animal.findById(req.params.id)
        if (animal === null)
            return res.status(404).json({ message: 'Animal not found' });
        // console.log(animal, 'shunaho');
        res.json(animal);
    } catch (e) {
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