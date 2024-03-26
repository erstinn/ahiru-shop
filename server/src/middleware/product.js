import Product from "../models/Product.js";
import User from "../models/User.js";

// const getProduct = async(req, res, next) => {
//     try {
//         const product = await Product.findById(req.params.id)
//         if (product === null)
//             return res.status(404).json({ message: 'Animal not found' });
//         res.animal = product;
//     } catch (e) {
//
//     }
//     next();
// }

export { getProduct };