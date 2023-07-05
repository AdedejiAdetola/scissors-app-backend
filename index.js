import { fileURLToPath } from 'url';
import { dirname } from 'path';

const _filename = fileURLToPath(import.meta.url);
const __dirname = dirname(_filename);

import path from 'path';
import dotenv from 'dotenv';
import mongoose from 'mongoose'; 
dotenv.config();

import express from 'express'; //const express = require(express)
import bodyParser from 'body-parser';
// import cors from 'cors';

import scissorsRoute from './routes/scissorsRoutes.js';

// import postRoutes from './routes/posts.js';
// import userRoutes from './routes/users.js';

const app = express() //initializing app

//templating engine
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public/')))
// for static files

app.use(bodyParser.json({ limit: "30mb", extended: true })) //limit, as images will be passed to our app
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })) //setting up bodyparser to send requests

//routes
app.use('/scissors', scissorsRoute);

//connect to databse 
const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }) //returns a promise
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((err) => console.log(err.message));

// mongoose.set('useFindAndModify', false);