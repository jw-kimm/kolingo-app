const { model, Schema } = require('mongoose')

const DiscussSchema = new Schema({
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
  author: {
    type: String,
    required: true,
    trim: true,
  },
  updated: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  comments: [{
    content: String,
    username: String,
    createdAt: Date
  }]
});


module.exports = model('Discuss', DiscussSchema);

/*
const { model, Schema } = require('mongoose')

const DiscussSchema = new Schema({
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
  author: {
    type: String,
    required: true,
    trim: true,
  },
  updated: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  },

});


module.exports = model('Discuss', DiscussSchema);
*/