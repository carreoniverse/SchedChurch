var router = require('express').Router();
var db = require('../../../lib/database')();
//var authMiddleware = require('../../auth/middlewares/auth');
//router.use(authMiddleware.noAuthed);


router.get('/', (req, res) => {


// router.get('/', (req, res) => {

//     var queryString =`SELECT * FROM tbl_reservation WHERE int_guestid = "${req.session.int_guestid}" AND char_status = "Approved"`
//     db.query(queryString, (err, results, fields) => {
//         if (err) console.log(err);
//         return res.render('guestwithsession/previous/views/previous',{ tbl_reservation : results });
//     });
// // });


    var queryString2 =`SELECT * FROM tbl_reservation WHERE int_guestid = "${req.session.int_guestid}" AND char_status = "Pending"`
    db.query(queryString2, (err, results, fields) => {
        if (err) console.log(err);
        return res.render('guestwithsession/previous/views/previous', {tbl_reservation: results, user: req.session.user });
    });

    //res.render('guestwithsession/previous/views/previous');
});


router.get('/annointment', (req, res) => {
    res.render('guestwithsession/previous/views/previousannointment');
});

router.get('/baptismal', (req, res) => {
    res.render('guestwithsession/previous/views/previousbaptismal');
});

router.get('/funeralmass', (req, res) => {
    res.render('guestwithsession/previous/views/previousfuneral');
});

router.get('/privatewedding', (req, res) => {
    res.render('guestwithsession/previous/views/previousprivatewedding');
});

router.get('/masswedding', (req, res) => {
    res.render('guestwithsession/previous/views/previousmasswedding');
});
module.exports = router;