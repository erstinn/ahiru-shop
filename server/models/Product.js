import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        type : {
            type: 'String',
            required: true,
            enum : {
                values: ['duck', 'others', 'misc']
            }
        },
        img:{
            type: 'String',
            default: '',
        },
        name : {
            en : {
                type: 'String',
                required: true,
                unique: true
            } ,
            jp: {
                type: 'String',
                required: true,
                unique: true
            }
        },
        desc : {
            en : {
                type: 'String',
            },
            jp: {
                type: 'String',
            }
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

const Product = mongoose.model('Product', ProductSchema);
export default Product;