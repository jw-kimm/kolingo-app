const express = require("express");
const router = express.Router();
// const router = require('express-promise-router');

const UsersController = require('../controllers/users')

//get ALL users
router.route('/')
    .get(UsersController.index)
    .post(UsersController.newUser);

// /users/:id
router.route('/:userId')
    .get(UsersController.getUser)
    //should received entire object
    .put(UsersController.replaceUser)

    //only that needs to be updated.
    .patch(UsersController.updateUser);




module.exports = router;