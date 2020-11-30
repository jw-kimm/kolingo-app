const { model, Schema } = require('mongoose')

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
    sparse: true,
  },
  username: {
    type: String,
    unique: true,
    sparse: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  updated: {
    type: Date,
    default: Date.now
  },
  created: {
    type: Date,
    default: Date.now
  },
  userExp: {
    type: Number,
    min: 0,
    max: 1000,
    default: 0
  }
});

module.exports = model('User', UserSchema);