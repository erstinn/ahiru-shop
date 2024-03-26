import User from "../models/User.js";


export const getUserData = async (req, res) => {

}
export const addToCart = async (req, res) => {

}

export const removeFromCart = async (req, res) => {

}

export const getPurchasedItems = async (req, res) => {

}

export const checkout = async (req, res) => {

}

export const updateUserSettings = async (req, res) => {
   try {
      const data = req.body;
      const user = await User.findOneAndUpdate({_id: req.params.id}, data, {new: true})

      if (user)
         res.status(200).json({ success: true, message: 'Update successful'});
      res.status(404).json({ success: false, message: 'User not found' });

   } catch (e) {
      res.status(500).json({ success: false, message: 'Error in updating preferences/user details' });

   }

}

//only if not COD
export const getUserBalance = async (req, res) =>{

}
export const addPaymentMethod = async (req, res) => {

}

export const getTransactionHistory = async (req, res) => {

}

export const deleteAccount = async (req, res) => {
   try {
      const {id} = req.params.id;
      const userDeleted = await User.findByIdAndDelete(id)
      if (userDeleted)
         res.status(204).json({ success: true, message: 'User deleted successfully' });
      res.status(404).json({ success: false, message: 'User not found' });
   } catch (e) {
      res.status(500).json({ success: false, message: 'Error in deleting account' });

   }
}