const router = require('express').Router();
const usersCtrl = require('../controllers/users');

router.get('/', usersCtrl.index);
router.post('/post', isLoggedIn, usersCtrl.addPost);
router.delete('/post/:id', isLoggedIn, usersCtrl.delPost);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;