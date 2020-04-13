var mongoose = require('mongoose');

// The commentSchema is used to embed documents into the userSchema
var commentSchema = new mongoose.Schema({
  text: String
}, {
  timestamps: true
});

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  comments: [commentSchema],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);