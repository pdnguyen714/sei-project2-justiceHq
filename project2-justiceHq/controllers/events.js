const Post = require('../models/post');

function index(req, res, next) {
  Post.find({
    category: 'events'
  }).exec(function(err, posts) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('events/index', { 
      posts, 
      user: req.user
       });
  });
}

function addPost(req, res, next) {
  req.body.category = 'events';
  //console.log('req.body', req.body);
  const post = new Post(req.body)
  post.save(function (err, posts) {
    console.log('last added', posts);
    res.redirect('/events');
  });
}

module.exports = {
    index,
    addPost
};