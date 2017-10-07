var router = require('express').Router();
var db = require('../../../lib/database')();
var authMiddleware = require('../../auth/middlewares/auth');
//router.use(authMiddleware.hasAuthadmin);


router.get('/', (req, res) => {
    res.render('guestwithsession/masswedding/views/massweddingreservation');
});

router.get('/listofsponsors', (req, res) => {
    res.render('guestwithsession/masswedding/views/listofsponsors');
});

router.get('/listofrequirements', (req, res) => {
    res.render('guestwithsession/masswedding/views/listofrequirements');
});


router.post('/', (req, res) => {
    // res.redirect('/guestwithsession/masswedding/listofsponsors');
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
        
        
        VALUES("${req.body.guestid}",
        "${req.body.baptismaldate}", 
        "${req.body.childbirthday}", 
        "${req.body.familyaddress}", 
        'Baptismal', 
        "${req.body.baptismalrelationship}", 
        "${req.body.childlastname}",
        "${req.body.childfirstname}",
        "${req.body.childmiddlename}")`;
       
        
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
            "${req.body.guestid}", 
            "2", 
            "Baptismal", 
            "Pending", 
            "Unpaid")`;
        //    (select int_eventid from tbl_event where int_guestid= ${req.session.int_guestid})
            db.query(queryString2, (err, results, fields) => {
                if (err) throw err;
                var baptismalid= results;
                console.log(baptismalid)
                // return res.redirect('/guestwithsession/baptismal/listofrequirements');
                 var queryString3 = `INSERT INTO tbl_baptismalevent(
                \`int_eventid\`,
                \`varchar_motherlastname\`,
                \`varchar_motherfirstname\`,
                \`varchar_mothermiddlename\`,
                \`varchar_motherbirthplace\`,
                \`varchar_fatherlastname\`,
                \`varchar_fatherfirstname\`,
                \`varchar_fathermiddlename\`,
                \`varchar_fatherbirthplace\`,
                \`varchar_parentmarriageaddress\`,
                \`varchar_baptismalcontact\`) 
                
                VALUES(
                "${eventid.insertId}",
                "${req.body.motherlastname}", 
                "${req.body.motherfirstname}", 
                "${req.body.mothermiddlename}",
                "${req.body.motherbirthplace}",
                "${req.body.fatherlastname}", 
                "${req.body.fatherfirstname}", 
                "${req.body.fathermiddlename}", 
                "${req.body.fatherbirthplace}",
                "${req.body.placeofmarriage}",
                "${req.body.familycontact}")`;
            
                db.query(queryString3, (err, results, fields) => {
                    if (err) throw err;
                    var sponsorid=results;                
                    console.log(sponsorid);
                    var queryString4 = `INSERT INTO tbl_sponsorsbaptismal(
                        \`int_sponsorid\`,
                        \`varchar_sponsorlastname\`,
                        \`varchar_sponsorfirstname\`,
                        \`varchar_sponsormiddlename\`) 
                        
                        VALUES(
                        "${sponsorid.insertId}",
                        "${req.body.ninonglastname}",
                        "${req.body.ninongfirstname}",
                        "${req.body.ninongmiddlename}")`;
                    
                        db.query(queryString4, (err, results, fields) => {
                            if (err) throw err;
                            return res.redirect('/guestwithsession/baptismal/listofrequirements');
                        });
    
                }); 
            }); 
        }); 
    
    // });
});

router.post('/listofsponsors', (req, res) => {
    res.redirect('/guestwithsession/masswedding/listofrequirements');
});

module.exports = router;