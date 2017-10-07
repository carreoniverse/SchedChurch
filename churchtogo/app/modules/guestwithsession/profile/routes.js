var router = require('express').Router();
var db = require('../../../lib/database')();
//var authMiddleware = require('../../auth/middlewares/auth');
//router.use(authMiddleware.noAuthed);


router.get('/', (req, res) => {
    res.render('guestwithsession/profile/views/profile',{user: req.session.user});
});

router.get('/editprofile', (req, res) => {

    // var queryString1= `SELECT * from tbl_guest where int_guestid= "${req.session.int_guestid}"`
    res.render('guestwithsession/profile/views/editprofile',{user: req.session.user});
    // db.query(queryString1, (err, results, fields) => {
    //     return res.render('guestwithsession/profile/views/editprofile', { user: req.session.user });
    // })
});

router.post('/editprofile', (req, res) => {
    console.log('NANDITO SIYA SA EDITPROFILE POST');
    const queryString = `UPDATE tbl_user SET        
    varchar_lastname = ("${req.body.lastname}"),
    varchar_firstname = ("${req.body.firstname}"),
    varchar_middlename = ("${req.body.middlename}"),
    varchar_username = ("${req.body.username}"),
    varchar_password = ("${req.body.password}"),
    char_usertype = "User",
    varchar_guestemail = ("${req.body.email}"),
    char_gender = ("${req.body.gender}"),
    date_guestbirthday = ("${req.body.birthday}"),
    varchar_guestaddress = ("${req.body.address}"),
    varchar_guestcontactnumber = ("${req.body.contactnumber}")
    WHERE int_guestid = "${req.body.guestid}";`;

    db.query(queryString, (err, results, fields) => {        
        if (err) throw err;         
        // delete user.varchar_password;
        // // req.session.user = req.body.user_username;
        // req.session.user = user;
        // // return res.redirect('/guestwithsession/home');
        // return res.redirect('/guestwithsession/profile');
        // return res.redirect('/guestwithsession/profile'); 
        
        req.session.destroy(err => {
            if (err) throw err;
            // res.redirect('/login');
        });
    });
    
    db.query(`SELECT * FROM tbl_user WHERE varchar_username="${req.body.user_username}"`, (err, results, fields) => {
        console.log("pumasok sya dito");
        if (err) throw err;
        // if (results.length === 0) return res.redirect('/login?incorrect');

        var user = results[0];
        
        // if (user.varchar_password !== req.body.password) return res.redirect('/login?incorrect');
            
            // delete user.varchar_password;
            // req.session.user = req.body.user_username;
            req.session.user = user;
            console.log(req.session);
            return res.redirect('/guestwithsession/profile');
        
    });
        
});
// });


module.exports = router;