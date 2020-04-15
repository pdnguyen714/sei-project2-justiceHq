var mongoose = require('mongoose');
const Schema = mongoose.Schema;


var commentSchema = new mongoose.Schema({
  text: String,
  user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {
  timestamps: true
});

var postSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  comment: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Post', postSchema);