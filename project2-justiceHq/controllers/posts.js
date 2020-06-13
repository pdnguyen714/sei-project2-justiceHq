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

  
  function delPost(req, res, next) {
    Post.deleteOne({_id:req.params.id})
    .then((err) => {
      res.redirect('/posts');
    })
  }
  
  function editPost(req, res) {
    Post.findById({_id:req.params.id}, (err, posts) => {
      console.log("Found Post:", posts);
      res.render("./posts/edit.ejs", {
        posts,
        user: req.user
      });
    });
  }
  
  function updatePost(req, res) {
    Post.findByIdAndUpdate(req.params.id, req.body,
      (err, posts) => {
        res.redirect('/posts');
      }
      );
    }
    
    function addComment(req, res, next) {
      const comment = new Comment(req.body)
      Post.findById({_id:req.params.id}, (err, post) => {
        post.comments.push(comment)
      })
      comment.save(function(err, comments) {
        console.log('comments!', comments);
        res.redirect('/posts');
      });
    }

    module.exports = {
      index,
      addPost,
      delPost,
      editPost,
      updatePost,
      addComment,
}