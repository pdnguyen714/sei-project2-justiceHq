const router = require('express').Router();
const homesCtrl = require('../controllers/homes');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

router.get('/', homesCtrl.index);
router.post('/', isLoggedIn, homesCtrl.addPost);

module.exports = router;