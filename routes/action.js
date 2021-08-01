const express = require('express');
const router = express.Router();

// Require action controller
const actionsController = require('../controllers/actions_controller');

//Middleware for decoding data coming from browser
router.use(express.urlencoded({extended: true}));

//This will handle the requests coming to /action/create-task and execute create function from actions_controller 
router.post('/create-task', actionsController.create);

//This will handle the requests coming to /action/delete-tasks and execute delete function from actions_controller
router.post('/delete-tasks', actionsController.delete);

module.exports = router;