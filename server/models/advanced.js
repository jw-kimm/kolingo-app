const mongoose = require('mongoose');

const AdvancedSchema = new mongoose.Schema({
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

const Advanced = mongoose.model('Advanced', AdvancedSchema, "advanced");


module.exports = Advanced;