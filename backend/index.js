import express from 'express';

const app = express();

app.listen(3000, ()=> {
    console.log(`Port Running on port 3000`);
})