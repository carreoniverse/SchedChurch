var router = require('express').Router();
var db = require('../../../lib/database')();
var authMiddleware = require('../../auth/middlewares/auth');
//router.use(authMiddleware.hasAuthadmin);

router.get('/', (req, res) => {
    res.render('guestwithsession/guestreservation/views/guestreservation');
    db.query('SELECT * FROM tbl_guest', (err, results, fields) => {
        return res.redirect('guest/home', {guest:results});
    });
});

router.post('/', (req, res) => {
    var queryString = `INSERT INTO \`tbl_guest\` (\`char_guestName\`,\`varchar_guestAddress\`,\`int_guestContactNumber\`, \`varchar_guestEmail\`, \`char_guestEventtype\`)
    VALUES("${req.body.guestname}", "${req.body.guestaddress}", ${req.body.guestcontact},"${req.body.guestemail}","${req.body.guest_event}")`;
    
    db.query(queryString, (err, results, fields) => {
        if (err) throw err;
        // return res.redirect('/guest/home');

        console.log('POST GUEST RESERVATION');

        if(req.body.guest_event === "Private Wedding"){
            console.log('POST GUEST RESERVATION PRIVATE WEDDING');
            res.redirect('/guestwithsession/privatewedding');
        }
        if(req.body.guest_event === "Mass Wedding"){
            console.log('POST GUEST RESERVATION MASS WEDDING');
            res.redirect('/guestwithsession/masswedding');
        }
        if(req.body.guest_event === "Annointment"){
            console.log('POST GUEST RESERVATION ANNOINTMENT');
            res.redirect('/guestwithsession/annointment');
        }
        if(req.body.guest_event === "Baptismal"){
            console.log('POST GUEST RESERVATION BAPTISMAL');
            res.redirect('/guestwithsession/baptismal');
        }
        if(req.body.guest_event === "Confirmation"){
            console.log('POST GUEST RESERVATION CONFIRMATION');
            res.redirect('/guestwithsession/confirmation');
        }
        if(req.body.guest_event === "Funeral"){
            console.log('POST GUEST RESERVATION FUNERAL');
            res.redirect('/guestwithsession/funeral');
        }

    });
});

router.get('/finalizingrequirements', (req, res) => {
    res.render('guestwithsession/guestreservation/views/finalizingrequirements');
    });



// router.get('/', (req, res) => {
//     db.query('SELECT * FROM categories', (err, results, fields) => {
//         return res.render('admin/users/views/index', {category:results});
//     });
// });


    
module.exports = router;