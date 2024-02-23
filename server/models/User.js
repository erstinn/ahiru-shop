import mongoose from "mongoose";

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
            credit: {
                type: String,
                required: true,
                unique: true,
                max: 50,
                validate: {
                    validator: (v) => /^(\d{4}-){3}\d{4}$/.test(v) //todo
                }
            },
            method: {
                type: String,
                enum: {
                    values: ['GCash', 'PayPal', 'DuckCard'],
                    message: '{VALUE} is not supported'
                }
            },
            expiration: {
                type: Date,
                required: true
            }
        },
        profilePic: {
            type: String,
            unique: true,
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



const User = mongoose.model('User', UserSchema);
export default User;