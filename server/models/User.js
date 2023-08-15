import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: 'String',
            required: true,
            min: 6,
            max: 50,
            unique: true,
        },
        firstName: {
            type: 'String',
            required: true,
            min: 2,
            max: 50,
        },
        lastName: {
            type: 'String',
            required: true,
            min: 2,
            max: 50,
        },
        email:{
            type: 'String',
            required: true,
            unique: true,
            max: 50,
        },
        credit:{
            type: 'String',
            required: true,
            unique: true,
            max: 50,
        },
        password:{
            type: 'String',
            required: true,
            unique: true,
            min: 6,
            max: 50,
        },
        // cart:{
        //     type: '',
        // },
    },
    {timestamps: true} // to enforce timestamps: dateCreated
);


const User = mongoose.model('User', UserSchema);
export default User;