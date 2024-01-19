import {Router} from "express";
import Product from '../models/Product.js';
import {getProduct} from "../middleware/product.js";
const router = Router ();

router.get('/', async (req,res) => {
    try {
        const products = await Product.find();
        res.json(products)

    } catch (e) {
        console.log(e);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (product === null)
            return res.status(404).json({ message: 'Animal not found' });
        res.json(product);
    } catch (e) {
    }
});

router.delete('/:id', getProduct, async(req, res) => {
    try {
        // const product
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