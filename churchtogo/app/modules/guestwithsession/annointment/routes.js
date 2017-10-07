var router = require('express').Router();
var db = require('../../../lib/database')();
var authMiddleware = require('../../auth/middlewares/auth');
//router.use(authMiddleware.hasAuthadmin);

// router.post('/', (req, res) => {
//     var queryString = `INSERT INTO \`int_guestId\` (\`int_annoinmentId\`,\`int_annointrelation\`,\`char_annointmentName\`, \`date_annointbirth\` \`date_annointmentSchedule\`, \`varchar_annoinmentAddress\`)
//     VALUES("${req.body.annointrelationship}", "${req.body.annointname}", ${req.body.annointbirth},${req.body.annointdate},"${req.body.annointaddress}");`;
//     });


router.get('/', (req, res) => {
    res.render('guestwithsession/annointment/views/annointmentreservation',{user: req.session.user});
});


router.get('/listofrequirements', (req, res) => {
    res.render('guestwithsession/annointment/views/listofrequirements');
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
    
    
    VALUES("${req.body.annointid}",
    "${req.body.annointdate}", 
    "${req.body.annointbirthday}", 
    "${req.body.annointaddress}", 
    'Annointment', 
    "${req.body.annointrelationship}", 
    "${req.body.annointlastname}",
    "${req.body.annointfirstname}",
    "${req.body.annointmiddlename}")`;
   
    
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
        "${req.body.annointid}", 
        "2", 
        "Annointment", 
        "Pending", 
        "Unpaid")`;
    //    (select int_eventid from tbl_event where int_guestid= ${req.session.int_guestid})
        db.query(queryString2, (err, results, fields) => {
            if (err) throw err;
            return res.redirect('/guestwithsession/annointment/listofrequirements');
        
        }); 
    }); 

});

module.exports = router;

// var queryString = `INSERT INTO tbl_event(\`int_guestid\`,\`int_reservationid\`,
// \`date_schedule\`,\`date_birthday\`,\`varchar_address\`,\`char_event\`,
//  \`char_relation\`,\`varchar_lastname\`,\`varchar_firstname\`,\`varchar_middlename\`) 
// VALUES( ${req.body.annointid},"1", "${req.body.annointdate}", 
// "${req.body.annointbirthday}", "${req.body.annointaddress}", 
// 'Annointment', "${req.body.annointrelationship}", "${req.body.annointlastname}","${req.body.annointfirstname}",
// "${req.body.annointmiddlename}")`;


// db.query(queryString, (err, results, fields) => {
//     if (err) throw err;
//     // return res.redirect('/guestwithsession/annointment/lisofrequirements');

// }); 

// var queryString1 = `SELECT int_reservationid FROM tbl_event WHERE int_guestid = "${req.body.annointid}"`
// var queryString2 = `INSERT INTO tbl_reservation(\`int_reservationid\`,\`int_eventid\`,
// \`int_guestid\`,
// \`int_priestid\`,
// \`char_guesteventtype\`,
// \`char_status\`,
// \`char_feestatus\`) 

// VALUES("(SELECT int_reservationid FROM tbl_event WHERE int_guestid = ${req.body.annointid})",
// "(SELECT int_eventid FROM tbl_event WHERE int_guestid = ${req.body.annointid})",
// "${req.body.annointid}", 
// "2", 
// "Annointment", 
// "Pending", 
// "Unpaid")`;

// db.query(queryString2, (err, results, fields) => {
//     if (err) throw err;
//     return res.redirect('/guestwithsession/annointment/lisofrequirements');

// });