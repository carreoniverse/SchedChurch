var router = require('express').Router();
var db = require('../../../lib/database')();
//var authMiddleware = require('../../auth/middlewares/auth');
//router.use(authMiddleware.noAuthed);


router.get('/', (req, res) => {
    res.render('guestwithsession/gallery/views/gallery');
});
module.exports = router;