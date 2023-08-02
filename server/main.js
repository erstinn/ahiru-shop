import express from 'express';
import {config} from "dotenv";
import morgan from 'morgan';
import connectDB from "./conf.js";

const app = express();
config();

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(morgan('dev'));

// Define a route for the home page
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

const port = 3000;
app.listen(port, () => {
    connectDB().then(() => {
        console.log(`Server is running on http://localhost:${port}`);
    });
});
