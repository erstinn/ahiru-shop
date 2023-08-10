import mongoose from 'mongoose';
import {config} from "dotenv";

config();
const MONGO_URI = process.env.MONGO_URL ;
// const MONGO_URI = process.env.MONGO_URL || 'mongodb://localhost:27000/farm';

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('mongo connect')
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
}
export default connectDB