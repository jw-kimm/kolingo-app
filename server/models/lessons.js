const {model, Schema} = require('mongoose');

const LessonsSchema = new Schema({
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

module.exports = model('Lessons', LessonsSchema);