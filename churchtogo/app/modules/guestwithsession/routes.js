var router = require('express').Router();
var authMiddleware = require('../auth/middlewares/auth');

router.use(authMiddleware.hasAuth);


router.use('/annointment', require('./annointment/routes'));
router.use('/annointment/listofrequirements', require('./baptismal/routes'));

router.use('/baptismal', require('./baptismal/routes'));
router.use('/baptismal/listofrequirements', require('./baptismal/routes'));
router.use('/baptismal/listofsponsors', require('./baptismal/routes'));

router.use('/funeralmass', require('./funeralmass/routes'));
router.use('/funeralmass/listofrequirements', require('./funeralmass/routes'));

router.use('/masswedding', require('./masswedding/routes'));
router.use('/masswedding/listofsponsors', require('./masswedding/routes'));

router.use('/privatewedding', require('./privatewedding/routes'));
router.use('/privatewedding/listofsponsors', require('./privatewedding/routes'));
router.use('/privatewedding/listofrequirements', require('./privatewedding/routes'));

router.use('/masswedding/listofrequirements', require('./masswedding/routes'));


router.use('/home', require('./home/routes'));
router.use('/profile', require('./profile/routes'));
router.use('/profile/editprofile', require('./profile/routes'));
router.use('/guestreservation', require('./guestreservation/routes'));
router.use('/guestreservation/finalizingrequirements', require('./guestreservation/routes'));

router.use('/previous', require('./previous/routes'));
router.use('/previous/annointment', require('./previous/routes'));
router.use('/previous/baptismal', require('./previous/routes'));
router.use('/previous/funeralmass', require('./previous/routes'));
router.use('/previous/masswedding', require('./previous/routes'));
router.use('/previous/privatewedding', require('./previous/routes'));



router.use('/about', require('./about/routes'));
router.use('/gallery', require('./gallery/routes'));
router.use('/calendar', require('./calendar/routes'));
exports.guestwithsession = router;