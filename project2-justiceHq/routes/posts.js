var router = require('express').Router();
var postsCtrl = require('../controllers/posts');

// GET /users
router.get('/', postsCtrl.index);

// POST /facts
// We will already have access to the logged in user on
// the server, therefore do not use: /users/:id/posts
router.post('/', isLoggedIn, postsCtrl.addPost);
router.post('/comment/:id', isLoggedIn, postsCtrl.addComment);

// DELETE /posts/:id
router.delete('/:id', isLoggedIn, postsCtrl.delPost);

router.put('/:id', isLoggedIn, postsCtrl.updatePost);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;