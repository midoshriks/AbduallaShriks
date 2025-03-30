const express = require('express');
const router = express.Router();
//* include the moment
var moment = require('moment');
//* include the model
const Customer = require('../models/customer');
const UsersController = require('../controllers/UsersController');

// Get request
// ? route to add new user
router.get('', UsersController.add);

// Post request
router.post('', UsersController.story);

module.exports = router;