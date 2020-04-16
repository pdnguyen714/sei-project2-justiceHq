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
    req.body.post = 'posts';
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
    Post.deleteOne({_id:req.params.id})
    .then((err) => {
           res.redirect('/posts');
    })
  }

  const updatePost = (req, res) => {
    console.log("update action");
    console.log(req.params.id);
    Post.findByIdAndUpdate(req.params.id, req.body, (err, posts) => {
      if (err) {
        console.log("error");
        console.log(err);
        return res.redirect(`/posts/${post._id}`);
      }
      console.log(deck.name);
      res.redirect(`/posts/${post._id}`);
    });
  };

  module.exports = {
    index,
    addPost,
    delPost,
    updatePost
}