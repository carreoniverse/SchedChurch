var router = require('express').Router();
var db = require('../../../lib/database')();
//var authMiddleware = require('../../auth/middlewares/auth');
//router.use(authMiddleware.noAuthed);


router.get('/', (req, res) => {
    res.render('admin/privatewedding/views/privateweddingreservation');
});

router.get('/listofsponsors', (req, res) => {
    res.render('admin/privatewedding/views/listofsponsors');
});
module.exports = router;