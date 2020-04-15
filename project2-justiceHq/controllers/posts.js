const User = require('../models/user');
const Post = require('../models/post');

module.exports = {
    index,
    addPost,
    delPost,
    updatePost,
    addComment
  };

function index(req, res, next) {
    res.send('index function')
}

function addPost(req, res, next) {
    res.send('hit add post action')
    // req.user.facts.push(req.body);
    // req.user.save(function(err) {
    //   res.redirect('/users');
    // });
  }
  
  function delPost(req, res, next) {
      res.send('hit delete post action');
    // User.findOne({'comments._id': req.params.id}, function(err, user) {
    //   user.facts.id(req.params.id).remove();
    //   user.save(function(err) {
    //     res.redirect('/users');
    //   });
    // });
  }

  function updatePost(req, res, next) {
    res.send('hit update post action');
  }

  function addComment(req, res, next) {
    res.send('add comment action')
  }