const router = require('express').Router();
const postsCtrl = require('../controllers/posts');

router.get("/:id/edit", isLoggedIn, postsCtrl.editPost);
router.get('/', postsCtrl.index);
router.post('/', isLoggedIn, postsCtrl.addPost);
// router.post('/', isLoggedIn, postsCtrl.addComment);
router.delete('/:id', isLoggedIn, postsCtrl.delPost);
router.put("/:id", isLoggedIn, postsCtrl.updatePost);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;