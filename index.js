// Require express library
const express = require('express');

// Port on which express server is running
const port = 8000;

// Path for joining directories
const path = require('path');

//To get all functionalities of express, we call express as a function.
const app = express();

//Redirect to routes/index.js
app.use('/', require('./routes'));

// Set up view engine
app.set('view engine', 'ejs');

//View path
app.set('views', path.join(__dirname, 'views'));

//Parser - a middleware-for decoding
app.use(express.urlencoded());

//Use static files
app.use(express.static('assets'));


//listening to Server
app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log((`Successfully connected to port: ${port}`));
});