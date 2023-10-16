import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

mongoose.connect(process.env.MONGDB_URI)
.then(() => {
    try {
        console.log('Mongodb Connected')
    } catch (err) {
        console.log(err)
    }
})

const app = express();

app.listen(3000, ()=> {
    console.log(`Port Running on port 3000`);
})