const express = require("express");
const router = express.Router();
// const router = require('express-promise-router');

const LessonsController = require('../controllers/lessons')

//get ALL lessons
router.route('/')
    .get(LessonsController.index)

// /lessons/:id
router.route('/:userId')
    .get(LessonsController.getLesson)


module.exports = router;