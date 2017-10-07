var router = require('express').Router();
var db = require('../../../lib/database')();
// var authMiddleware = require('../../auth/middlewares/auth');
//router.use(authMiddleware.hasAuthadmin);


router.get('/', (req, res) => {
    res.render('guestwithsession/funeralmass/views/funeralmassreservation',{user: req.session.user});
});

router.get('/listofrequirements', (req, res) => {
    res.render('guestwithsession/funeralmass/views/listofrequirements');
});


router.post('/', (req, res) => {
    // res.redirect('/guestwithsession/funeralmass/listofrequirements');
    var queryString = `INSERT INTO tbl_event(
    \`int_guestid\`,
    \`date_schedule\`,
    \`date_birthday\`,
    \`varchar_address\`,
    \`char_event\`,
    \`char_relation\`,
    \`varchar_lastname\`,
    \`varchar_firstname\`,
    \`varchar_middlename\`) 
    
    
    VALUES("${req.body.deadid}",
    "${req.body.deaddate}", 
    "${req.body.deadbirthday}", 
    "${req.body.deadaddress}", 
    'Funeral Mass', 
    "${req.body.deadrelationship}", 
    "${req.body.deadlastname}",
    "${req.body.deadfirstname}",
    "${req.body.deadmiddlename}")`;
   
    
    db.query(queryString, (err, results, fields) => {
        if (err) throw err;
        // return res.redirect('/guestwithsession/annointment/lisofrequirements');
        var eventid= results;
        console.log(eventid)
        
        var queryString2 = `INSERT INTO tbl_reservation(
        \`int_eventid\`,
        \`int_guestid\`,
        \`int_priestid\`,
        \`char_guesteventtype\`,
        \`char_status\`,
        \`char_feestatus\`) 
        
        VALUES(
        "${eventid.insertId}",
        "${req.body.deadid}", 
        "2", 
        "Funeral Mass", 
        "Pending", 
        "Unpaid")`;
    //    (select int_eventid from tbl_event where int_guestid= ${req.session.int_guestid})
        db.query(queryString2, (err, results, fields) => {
            if (err) throw err;
            return res.redirect('/guestwithsession/funeralmass/listofrequirements');
        
        }); 
    }); 

});


module.exports = router;