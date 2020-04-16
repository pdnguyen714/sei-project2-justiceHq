const router = require('express').Router();
const postsCtrl = require('../controllers/posts');

router.get('/', postsCtrl.index);
router.post('/', isLoggedIn, postsCtrl.addPost);
router.delete('/post/:id', isLoggedIn, postsCtrl.delPost);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;