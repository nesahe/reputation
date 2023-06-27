import express from 'express';
import { config } from 'dotenv';
import mongoose from 'mongoose';

import router from './router';

config({ path: "./config/.env" });

const app = express();

const PORT = process.env.PORT;
const DB_NAME = process.env.DB_NAME;
const DB_LOGIN = process.env.DB_LOGIN;
const DB_PASSWORD = process.env.DB_PASSWORD;

app.use('/api', router);

const start = async () => {
    try {

        app.listen(PORT, () => {
            console.log(`api is starting on port ${PORT}`)
        })

        await mongoose.connect(`mongodb+srv://${DB_LOGIN}:${DB_PASSWORD}@cluster0.fwflrmv.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)

    } catch (e) {
        console.log(e);
    }
}

start();