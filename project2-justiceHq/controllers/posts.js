const Post = require('../models/post');

function index(req, res, next) {
  Post.find()
  .exec(function(err, posts) {
    console.log(posts);
    if (err) return next(err);
    res.render('posts/index', { 
      posts,
      user: req.user
      });
  });
}

  function addPost(req, res, next) {
    req.body.category = 'posts';
    const post = new Post(req.body)
    post.save(function(err, posts) {
      console.log('posts page!', posts);
      res.redirect('/posts');
    });
  }

  // function delPost(req, res, next) {
  //   User.findOne({'posts._id': req.params.id}, function(err, user) {
  //     user.post.id(req.params.id).remove();
  //     user.save(function(err) {
  //       res.redirect('/posts');
  //     });
  //   });
  // }

  function delPost(req, res, next) {
    console.log('worked!')
    Post.findByIdAndRemove(req.params.id), function(err, posts) {
        res.redirect('/posts');
    };
  }

  module.exports = {
    index,
    addPost,
    delPost
}