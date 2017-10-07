var router = require('express').Router();

var authMiddleware = require('../auth/middlewares/auth');

router.use(authMiddleware.hasAuthadmin);
router.use('/home', require('./home/routes'));
router.use('/about', require('./about/routes'));
router.use('/calendar', require('./calendar/routes'));
router.use('/gallery', require('./gallery/routes'));

router.use('/reservationrequests', require('./reservationrequests/routes'));
router.use('/reservationrequests/annointment', require('./reservationrequests/routes'));
router.use('/reservationrequests/baptismal', require('./reservationrequests/routes'));
router.use('/reservationrequests/funeralmass', require('./reservationrequests/routes'));
router.use('/reservationrequests/masswedding', require('./reservationrequests/routes'));
router.use('/reservationrequests/privatewedding', require('./reservationrequests/routes'));

router.use('/records', require('./records/routes'));
router.use('/records/annointment', require('./records/routes'));
router.use('/records/baptismal', require('./records/routes'));
router.use('/records/funeralmass', require('./records/routes'));
router.use('/records/masswedding', require('./records/routes'));
router.use('/records/privatewedding', require('./records/routes'));
router.use('/records/annointment/view', require('./records/routes'));
router.use('/records/baptismal/view', require('./records/routes'));
router.use('/records/funeralmass/view', require('./records/routes'));
router.use('/records/masswedding/view', require('./records/routes'));
router.use('/records/privatewedding/view', require('./records/routes'));


router.use('/privatewedding', require('./privatewedding/routes'));
router.use('/masswedding', require('./masswedding/routes'));
router.use('/funeralmass', require('./funeralmass/routes'));
router.use('/baptismal', require('./baptismal/routes'));
router.use('/annointment', require('./annointment/routes'));

exports.admin = router;