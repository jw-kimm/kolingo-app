const Lessons = require('../models/lessons');


module.exports = {

    index: async(req,res,next) => {
        const lessons = await Lessons.find({})
        res.status(200).json(lessons);
    },

    getLesson: async(req,res,next) => {
        const { lessonsId } = req.params;
        const lessons = await Lessons.findById(lessonsId);
        res.status(200).json(lessons);
    },

};
