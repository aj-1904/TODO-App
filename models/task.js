//import mongoose
const mongoose = require('mongoose');

//creating schema
const taskSchema = new mongoose.Schema ({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
    }
});

//collection
const Task = mongoose.model('Task', taskSchema);
module.exports = Task;