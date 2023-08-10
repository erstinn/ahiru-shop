import mongoose from "mongoose";

const AnimalSchema = new mongoose.Schema(
    {
        type : {
            type: 'String',
            required: true,
        },
        img:{
            type: 'String',
            default: '',
        },
        name : {
            type: 'String',
            required: true,
            unique: true
        },
        desc : {
            type: 'String',
        },
        stock : {
            type: 'Number',
        },
    }
)
// const TransactionSchema = new mongoose.Schema(
//     {
//         name : {
//             type: 'String',
//             required: true,
//             unique: true
//         },
//         breed : {
//             type: 'String',
//             required: true,
//         },
//         picPath:{
//             type: 'String',
//             default: '',
//         },
//     }
// )

const Animal = mongoose.model('Animal', AnimalSchema);
export default Animal;