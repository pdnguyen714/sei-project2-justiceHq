const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema({
    text: String,
},
    { timestamps: true }
);

const postSchema = new mongoose.Schema({
    text: {
        type: String,     
    },
    
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'},
        comments: [commentSchema]
},  

    { timestamps: true }
);
module.exports = mongoose.model('Post', postSchema);