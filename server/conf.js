import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URL || 'mongodb://localhost:27017/test';

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