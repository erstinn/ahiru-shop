import mongoose from "mongoose";

const FarmSchema = new mongoose.Schema(
    {
        name : {
            type: 'String',
            required: true,
            unique: true
        },
        breed : {
            type: 'String',
            required: true,
        },
        picPath:{
            type: 'String',
            default: '',
        },
    }
)
const TransactionSchema = new mongoose.Schema(
    {
        name : {
            type: 'String',
            required: true,
            unique: true
        },
        breed : {
            type: 'String',
            required: true,
        },
        picPath:{
            type: 'String',
            default: '',
        },
    }
)