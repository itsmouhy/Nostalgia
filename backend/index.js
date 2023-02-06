const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;
app.use(cors());


//get routes
const movieRouter = require('./Routes/MovieRoutes');
const Movie = require('./Models/Movie');

//set current database URI
let MONGODB_URI;

    MONGODB_URI = 'mongodb+srv://admin:admin@cluster0.wlas0oj.mongodb.net/Movies';


//Connect to MongoDB database
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Connected to database`))
    .catch(error => console.log(`Could not connect to database: ${error}`));

app.use(express.json());
app.use(movieRouter);

const server = app.listen(PORT, () => console.log(`App running at: ${PORT}`));

module.exports = server;




