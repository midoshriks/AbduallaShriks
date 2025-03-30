const express = require('express');
const router = express.Router();
//* include the moment
var moment = require('moment');
//* include the model
const Customer = require('../models/customer');
//* include the controllers
const UsersController = require('../controllers/UsersController');

// Get request
// First argument is the route, second is the callback function
router.get('/', UsersController.index);
//* index Or user_index_get 

// ? route to edit user
router.get('/edit/:id', UsersController.edit);


// Variable request
// ? route to view user
router.get('/view/:id', UsersController.view);


// Post request
router.post('/search', UsersController.search);



// PUT request
router.put('/update/:id', UsersController.update);


// DELETE request
router.delete('/delete/:id', UsersController.destroy);












module.exports = router;