const { model, Schema } = require('mongoose')

const MatchingSchema = new Schema({
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

module.exports = model('Matching', MatchingSchema, "matching");


