const express = require('express');

// Setup Router
const router = express.Router();

//Requiring homeController
const homeController = require('../controllers/home_controller');

console.log('router loaded');

//Access homeController action
router.get('/', homeController.home);

//Route all requests starting with '/action' to routes/action.js file;
router.use('/action', require('./action'));

//Exporting router
module.exports = router;