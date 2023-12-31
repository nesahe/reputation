import express from 'express';
import { config } from 'dotenv';
import mongoose from 'mongoose';

import cookieParser from 'cookie-parser';

import { errorMiddleware } from './middlewares/errorMiddleware';

import { CLIENT_URL } from './constants';

import router from './router';

import cors from 'cors';

config({ path: "./config/.env" });

const app = express();

const PORT = process.env.PORT;
const DB_NAME = process.env.DB_NAME;
const DB_LOGIN = process.env.DB_LOGIN;
const DB_PASSWORD = process.env.DB_PASSWORD;


app.use(cookieParser());
app.use(cors({
    origin: CLIENT_URL,
    credentials: true
}));

app.use('/api', router);
app.use(errorMiddleware);

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