import mongoose from "mongoose";
const TransactionHistorySchema = new mongoose.Schema({
    action: {
        type: 'String',
        required: true,
        enum: ['buy', 'sell', 'refund']
    },
    // refund through; bought through; sold money goes through
    // if sell/refund cannot use COD
    method: {
        type: String,
        enum: {
            values: ['cod', 'paypal', 'duckcard'],
            message: 'invalid {VALUE}'
        }
    }
}, {timestamps: true})

const TransactionSchema = new mongoose.Schema(
   {
       username:{
           type: 'String',
           required: true,
           unique: true
       },
      history : {
           product: {
               type: 'String',
               required: true
           },
          transactionHistory: {
                type: [TransactionHistorySchema],
                immutable: true
           }
      },
      product : {
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