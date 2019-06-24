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
  points: {
    type: Number,
    min: 0,
    max: 100,
    default: 0
  }
});

var Lessons = mongoose.model('Lessons', LessonsSchema);

module.exports = Lessons;