// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;


// const commentSchema = new mongoose.Schema({
//   text: String,
//   user: {type: Schema.Types.ObjectId, ref: 'User'}
// }, {
//   timestamps: true
// });

// const postSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   avatar: String,
//   comment: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
//   googleId: String
// }, {
//   timestamps: true
// });

// module.exports = mongoose.model('Post', postSchema);



const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//same file as post
const commentSchema = new mongoose.Schema({
    text: String,
},
    { timestamps: true }
);
//make this a referenced schema in a different file
const postSchema = new mongoose.Schema({
    text: {
        type: String,
      
    },
    
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'},
        comments: [commentSchema],
},  

    { timestamps: true }
);
module.exports = mongoose.model('Post', postSchema);