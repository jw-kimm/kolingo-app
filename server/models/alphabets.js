const { model, Schema } = require('mongoose')

const AlphabetsSchema = new Schema({
  type: {
    type: String,
    required: true,
    trim: true,
  },
  value: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  pronounciation: {
    type: String,
    required: true,
    trim: true,
  },
  order: {
    type: String,
    required: true,
    trim: true,
  }

});

module.exports = model('Alphabets', AlphabetsSchema);