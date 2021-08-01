//import database configuration
const db = require('../config/mongoose');

//import database model
const Task = require('../models/task');

//Create function for creating new task
module.exports.create = function (req, res) {
    let newDate;

    //if no date selected
    if (req.body.date.length == 0) {
        newDate = 'No Deadline';
    }
    else {
        let temp = req.body.date;
        let date = temp.substring(8,10);
        let mon = temp.substring(5,7);
        let year = temp.substring(0,4);

        if (date[0] == '0') {
            date = date.substring(1);
        }
        if (mon[0] == '0') {
            mon = mon.substring(1);
        }

        let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        newDate = "" + date + " " + months[mon-1] + " " + year;
    }
    //Create new task and populate in db
    Task.create({
        description: req.body.description,
        category: req.body.category,
        date: newDate
    }, function (err) {
        if (err) {
            console.log('Error in creating a task');
            return;
        }
        return res.redirect('back');        
    });
}

//Delete function for deleting one or multiple tasks
module.exports.delete = function (req, res) {
    //No task selected
    if (req.body.id == undefined) {
        console.log('No task selected');
        return res.redirect('back');
    }
    //Only one task selected to delete
    else if (typeof(req.body.id) == 'string') {
        Task.findByIdAndDelete(req.body.id, function(err){
            if (err) {
                console.log('Error deleting task');
                return;
            }
            return res.redirect('back');
        });
    }
    //Multiple tasks selected to delete
    else {
        for (let i of req.body.id){
            Task.findByIdAndDelete(i, function (err) {
                if (err) {
                    console.log('Error deleting tasks');
                    return;
                } 
            })
        }
        return res.redirect('back');
    }
};