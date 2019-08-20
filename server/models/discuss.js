const mongoose = require('mongoose');

const DiscussSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  updated: {
    type: Date,
    default: Date.now
  },
  created: {
    type: Date,
    default: Date.now
  },
});

const Discuss = mongoose.model('Discuss', DiscussSchema);


module.exports = Discuss;