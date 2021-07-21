import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import connectDB from './startup/db.js';


const app = express();

connectDB();

app.use(express.json({ limit: "30mb"}));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

import itemRoutes from './routes/items.js';
import { connect } from 'mongodb';

app.use('/items', itemRoutes)
app.get('/', (req, res) => {
   res.send('Hello')
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});