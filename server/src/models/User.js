import mongoose from "mongoose";

const PaymentMethodSchema = new mongoose.Schema({
    method: {
        type: String,
        enum: {
            values: ['cod', 'paypal', 'duckcard'],
            message: '{VALUE} is not supported'
        }
    },
    account: {
        type: String,
        max: 50,
        validate: {
            validator: (v) => isAccountNumber,
            message: 'Validation failed'
        },
        required: () => {
            this.method === 'paypal' || this.method === 'duckcard'
        }
    },
    expiration: { //to set on node
        type: Date,
    }
})

const UserSchema = new mongoose.Schema(
    {
        email:{
            type: String,
            required: true,
            unique: true,
            max: 50,
            validate: {
                validator: (v) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v)
            }
        },
        username: {
            type: String,
            required: true,
            min: 6,
            max: 50,
            unique: true,
        },
        passwordHash: {
            type: String,
            required: true,
        },
        salt: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        address:{
            type: String,
            min: 6,
            max: 255,
        },
        paymentMethod: {
            type: [PaymentMethodSchema] //can have multiple methods
        },
        profilePic: {
            type: String,
        }, 
        preferences: {
            theme: {
                type: String,
                enum: {
                    values: ['dark', 'light'],
                    message: '{VALUE} is not supported'
                }
            },
            language: {
                type: String,
                enum: {
                    values: ['jp', 'eng'],
                    message: '{VALUE} is not supported'
                }
            }
        }
    },
    {timestamps: true} // createdAt and updatedAt
);

const isAccountNumber = (val) => {
    const method = this.path('paymentMethod.method');
    if (method === 'paypal')
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v)
    if (method === 'duckcard')
        return /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(v)

    return true; 
}



const User = mongoose.model('User', UserSchema);
export default User;