//import database model
const Task = require('../models/task');

//Colors for Category Selected
let colors = {
    personal: 'yellow',
    work: 'lightcyan',
    study: 'limegreen',
    workout: 'orange',
    sports: 'aquamarine'
}

//controller function for route '/'
module.exports.home = function (req, res) {
    Task.find({}, function (err, tasks) {
        if (err){
            console.log('Error in fetching tasks from db');
            return;
        }
        return res.render('home', {
            title: "TODO App",
            task_list: tasks,
            color_list: colors
        });       
    });
}