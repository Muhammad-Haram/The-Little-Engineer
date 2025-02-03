import dotenv from 'dotenv';
dotenv.config()
import morgan from 'morgan';
import express from 'express';
import connectToDb from './db/db.js'

connectToDb()

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extends: true }));


app.get('/', (req, res) => {
    res.send('hello world')
})

export default app;
