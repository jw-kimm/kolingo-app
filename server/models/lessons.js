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
  choices: {
    type: Array,
    required: true,
    trim: true,
  },
  answer: {
    type: String,
    required: true,
    trim: true,
  }
});

const Lessons = mongoose.model('Lessons', LessonsSchema);


module.exports = Lessons;