// Require mongoose library
const mongoose = require('mongoose');

//Connect to database
mongoose.connect('mongodb://localhost/todo_app_db');

//Acquire connection(check if it is successful)
const db = mongoose.connection;

//check for error
db.on('error', console.log.bind(console, 'Error connection to db'));

//up & running then print the msg
db.once('open', function () {
    console.log('Successfully connected to database');
});

