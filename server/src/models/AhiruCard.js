import mongoose from "mongoose";

const AhiruCardSchema = new mongoose.Schema(
   {
      balance: {
         type: 'Number',
      },
      account: {
         type: "String",
         required: true,
         unique: true
      }
   }
)


