import mongoose from "mongoose";

const OwnedProductsSchema = new mongoose.Schema({
    ownedBy: {
        type: String,
        required: true
    },
    refundDeadline: {
        type
    }
})