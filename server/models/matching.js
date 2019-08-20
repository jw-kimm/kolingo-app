const mongoose = require('mongoose');

const MatchingSchema = new mongoose.Schema({
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
  matched: {
    type: Boolean,
  },
  flipped: {
    type: Boolean
  }
});

const Matching = mongoose.model('Matching', MatchingSchema, "matching");


module.exports = Matching;