const router = require('express').Router();
const postsCtrl = require('../controllers/posts');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

router.get('/', postsCtrl.index);
router.post('/', isLoggedIn, postsCtrl.addPost);

module.exports = router;