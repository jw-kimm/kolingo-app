const router = require("express").Router();
const Lessons = require('../models/lessons');

//get ALL lessons
router.get('/', async(req,res,next) => {
    try{
    const lessons = await Lessons.find({})
    res.status(200).json(lessons); 
    } catch (err) {
        next(err)
    }
})


// /lessons/:id
router.get('/:id', async(req,res,next) => {
    try{
    const { lessonsId } = req.params;
    const lessons = await Lessons.findById(lessonsId);
    res.status(200).json(lessons);
    } catch(err){
        next(err)
    }
})

module.exports = router;