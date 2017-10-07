var router = require('express').Router();
var db = require('../../../lib/database')();
var authMiddleware = require('../../auth/middlewares/auth');
router.use(authMiddleware.hasAuthadmin);


router.get('/', authMiddleware.hasAuthadmin, (req, res) => {
    db.query('SELECT * FROM tbl_user JOIN tbl_reservation ON tbl_user.int_guestid=tbl_reservation.int_guestid WHERE tbl_reservation.char_status="Pending"', (err, results, fields) => {
        if (err) console.log(err)
        return res.render('admin/reservationrequests/views/reservationrequests', { tbl_event: results, user: req.session.user });
    });
});


router.get('/annointment', authMiddleware.hasAuthadmin, (req, res) => {
    res.render('admin/reservationrequests/views/annointmentrequests');
});

router.get('/baptismal', authMiddleware.hasAuthadmin, (req, res) => {
    res.render('admin/reservationrequests/views/baptismalrequests');
});

router.get('/funeralmass', authMiddleware.hasAuthadmin, (req, res) => {
    res.render('admin/reservationrequests/views/funeralrequests');
});

router.get('/masswedding', authMiddleware.hasAuthadmin, (req, res) => {
    res.render('admin/reservationrequests/views/massweddingrequests');
});

router.get('/privatewedding', authMiddleware.hasAuthadmin, (req, res) => {
    res.render('admin/reservationrequests/views/privateweddingrequests');
});
module.exports = router;