const mongoose = require('mongoose');

const LessonsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  prompt: {
    type: String,
    required: true,
    trim: true,
  },
  problem: {
    type: Array,
    required: true,
    trim: true,
  },
});

const Lessons = mongoose.model('Lessons', LessonsSchema);


module.exports = Lessons;