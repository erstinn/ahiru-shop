import Product from "../models/Product.js";

export const getAllProducts = async (req, res) => {
   try {
      const products = await Product.find();
      res.json(products)

   } catch (e) {
      console.log(e);
   }
}

export const getProduct = async (req, res) => {
   try {
      const product = await Product.findById(req.params.animalID)
      if (product === null)
         return res.status(404).json({ message: 'Product not found' });
      res.status(200).json(product); //todo return message etc
   } catch (e) {
      res.status(500).json({ success: false, message: 'Error in retrieving product' });
   }
}

export const deleteProduct = async (req, res) => {
   try {
      const deleteProduct = await Product.findByIdAndDelete(req.params.animalID)
      if (deleteProduct)
         res.status(204).json({ success: true, message: 'Product deleted successfully' });

   } catch (e) {
      res.status(500).json({ success: false, message: 'Error in deleting product' });

   }
}

export const getOwnedProducts = async (req, res) => {
   try {

   } catch (e) {
      res.status(500).json({ success: false, message: 'Error in getting owned products of the user' });

   }
}

// 売ると、シンプルでサイトのお金が増える
export const sellProduct = async (req, res) => {
   try {
      const sellProduct
   } catch (e) {
      res.status(500).json({ success: false, message: 'Error in selling the product' });

   }
}

export const purchaseProduct = async (req, res) => {
   try {

   } catch (e) {
      res.status(500).json({ success: false, message: 'Error in purchasing the product' });

   }
}
