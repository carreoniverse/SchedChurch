var router = require('express').Router();
var db = require('../../../lib/database')();
// var authMiddleware = require('../../auth/middlewares/auth');
//router.use(authMiddleware.hasAuthadmin);


router.get('/', (req, res) => {
    res.render('guestwithsession/submittingforms/views/submittingforms');
});

router.get('/annointmentrequirements', (req, res) => {
    res.render('guestwithsession/submittingforms/views/annointmentrequirements');
});


router.get('/baptismalrequirements', (req, res) => {
    res.render('guestwithsession/submittingforms/views/baptismalrequirements');
});

router.get('/confirmationrequirements', (req, res) => {
    res.render('guestwithsession/submittingforms/views/confirmationrequirements');
});

router.get('/funeralrequirements', (req, res) => {
    res.render('guestwithsession/submittingforms/views/funeralrequirements');
});

router.get('/massweddingrequirements', (req, res) => {
    res.render('guestwithsession/submittingforms/views/massweddingrequirements');
});

router.get('/privateweddingrequirements', (req, res) => {
    res.render('guestwithsession/submittingforms/views/privateweddingrequirements');
});


router.get('/home', (req, res) => {
    res.render('guestwithsession/submittingforms/views/home');
});

module.exports = router;