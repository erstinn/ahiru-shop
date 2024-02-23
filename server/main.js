import express from 'express';
import {config} from "dotenv";
import morgan from 'morgan';
import cors from 'cors';
import helmet from "helmet";

import connectDB from "./conf.js";
//routes:
import usersRouter from "./routers/users.js";
import productsRouter from "./routers/products.js";

const app = express();
config();

const PORT = process.env.PORT || 5001;

app.use(helmet()); //just for enhancing CORS security-related headers
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"})); //said policy allow cross origin; sets CORS policy
app.use(express.json());
app.use(morgan('dev'));
app.use(cors()); //allow reqs from any origin



// Define a route for the home page
app.get('/', (req, res) => {
    res.send('');
});


app.listen(PORT, () => {
    connectDB().then(() => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});

//mount routes:
app.use('/api/products', productsRouter);
app.use('/api/users', usersRouter);