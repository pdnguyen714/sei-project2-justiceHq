const Post = require('../models/post');

// function index(req, res, next) {
//     let modelQuery =  req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
//     let sortKey = req.query.sort || 'name';
//     Post.find(modelQuery)
//     .exec(function(err, posts) {
//       if (err) return next(err);
//       // Passing search values, name & sortKey, for use in the EJS
//       res.render('posts/index'
//       , { 
//         posts, 
//         user: req.user,
//         name: req.query.name, 
//         sortKey 
//       });
//     }
//     );
//   }


// refactored but does it work??
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




  // function addPost(req, res, next) {
  //   console.log(req.user);
  //   const post = new Post(req.body)
  //   // post.user = req.user._id;
  //   // req.post.push(req.body);
  //   post.save(function(err, post) {
  //     console.log('posts page post', post);
  //     res.redirect('/posts');
  //   });
  // }


  function addPost(req, res, next) {
    req.body.category = 'posts';
    console.log('req.body', req.body);
    const post = new Post(req.body)
    post.save(function(err, posts) {
      console.log('posts page post', post);
      res.redirect('/posts');
    });
  }

  function delPost(req, res, next) {
    User.findOne({'posts._id': req.params.id}, function(err, user) {
      user.facts.id(req.params.id).remove();
      user.save(function(err) {
        res.redirect('/users');
      });
    });
  }

  module.exports = {
    index,
    addPost,
    delPost
}