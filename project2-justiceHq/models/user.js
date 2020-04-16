const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    post: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'}
    ],
    googleId: String},

    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);