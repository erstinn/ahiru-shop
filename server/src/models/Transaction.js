import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
   {
      history : {
         type: 'String',
         required: true,
         unique: true
      },
      breed : {
         type: 'String',
         required: true,
      },
      method :{
         type: 'String',
         default: '',
      },
   }
)
const Transaction = mongoose.model('Transaction', TransactionSchema);
export default Transaction;