import {Router} from "express";
import Product from '../models/Product.js';
import {deleteProduct, getProduct} from "../controllers/products.js";
import {getAllProducts} from "../controllers/products.js";
import {verifyToken} from "../middleware/users.js";
const router = Router ();

router.get('/', getAllProducts);
router.get('/:animalID', getProduct);
router.patch('/:animalID/:userId', )
router.delete('/:animalID', getProduct)

router.put('/:animalID', async (req,res) => {
    try {
        res.json({users : []})
    } catch (e) {
        console.log(e);
    }
});

// todo verify if seller
router.delete('/:animalID', verifyToken, deleteProduct);

export default router;