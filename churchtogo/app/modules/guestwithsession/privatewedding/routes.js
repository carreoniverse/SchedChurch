var router = require('express').Router();
var db = require('../../../lib/database')();
//var authMiddleware = require('../../auth/middlewares/auth');
//router.use(authMiddleware.noAuthed);


router.get('/', (req, res) => {
    res.render('guestwithsession/privatewedding/views/privateweddingreservation',{user: req.session.user});
});

router.get('/listofsponsors', (req, res) => {
    res.render('guestwithsession/privatewedding/views/listofsponsors');
});

router.get('/listofrequirements', (req, res) => {
    res.render('guestwithsession/privatewedding/views/listofrequirements');
});


router.post('/', (req, res) => {
    // res.redirect('/guestwithsession/privatewedding/listofsponsors');
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
        "${req.body.weddingdate}", 
        "${req.body.bridebirthday}", 
        "${req.body.brideaddress}", 
        'Private Wedding', 
        "", 
        "${req.body.bridelastname}",
        "${req.body.bridefirstname}",
        "${req.body.bridemiddlename}")`;
       
        
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
            "Private Wedding", 
            "Pending", 
            "Unpaid")`;
        //    (select int_eventid from tbl_event where int_guestid= ${req.session.int_guestid})
            db.query(queryString2, (err, results, fields) => {
                if (err) throw err;
                var baptismalid= results;
                console.log(baptismalid)
                // return res.redirect('/guestwithsession/baptismal/listofrequirements');
                // var button1 = document.getElementById("optionsRadios1");
                // var button2 = document.getElementById("optionRadios2");
                
                // if (button1.checked){
                //     var if
                // }else if (button2.checked) {
                    
                // }


                 var queryString3 = `INSERT INTO tbl_weddingevent(
                \`int_eventid\`,
                \`varchar_brideoccupation\`,
                \`char_bridecivilstatus\`,
                \`char_bridereligion\`,
                \`bool_brideifpregnant\`,
                \`bool_brideifbaptized\`,
                \`bool_brideifconfirmed\`,
                \`varchar_bridemotherlastname\`,
                \`varchar_bridemotherfirstname\`,
                \`varchar_bridemothermiddlename\`,
                \`varchar_bridemotherbirthplace\`,
                \`varchar_bridefatherlastname\`,
                \`varchar_bridefatherfirstname\`,
                \`varchar_bridefathermiddlename\`,
                \`varchar_groomlastname\`,
                \`varchar_groomfirstname\`,
                \`varchar_groommiddlename\`,
                \`date_groombirthday\`,
                \`varchar_groomadress\`,
                \`varchar_brideoccupation\`,
                \`char_bridecivilstatus\`,
                \`char_bridereligion\`,
                \`bool_brideifbaptized\`,
                \`bool_brideifconfirmed\`,
                \`varchar_groommotherlastname\`,
                \`varchar_groommotherfirstname\`,
                \`varchar_groommothermiddlename\`,
                \`varchar_groomfatherlastname\`,
                \`varchar_groomfatherfirstname\`,
                \`varchar_groomfathermiddlename\`,
                \`bool_ifcivillymarried\`,
                \`bool_ifchurchmarried\`,
                \`char_motif\`) 
                
                VALUES(
                "${eventid.insertId}",
                "${req.body.brideoccupation}",
                "${req.body.bridestatus}",
                "${req.body.bridereligion}",
                "1",
                "1",
                "1",
                "${req.body.bridemotherlastname}",
                "${req.body.bridemotherfirstname}",
                "${req.body.bridemothermiddlename}",
                "${req.body.bridefatherlastname}",
                "${req.body.bridefatherfirstname}",
                "${req.body.bridefathermiddlename}",
                "${req.body.groomlastname}",
                "${req.body.groomfirstname}",
                "${req.body.groommiddlename}",
                "${req.body.groombirthday}",
                "${req.body.groomaddress}",
                "${req.body.groomoccupation}",
                "${req.body.groomcivilstatus}",
                "${req.body.groomreligion}",
                "1",
                "1",
                "${req.body.groommotherlastname}",
                "${req.body.groommotherfirstname}",
                "${req.body.groommothermiddlename}",
                "${req.body.groomfatherlastname}",
                "${req.body.groomfatherfirstname}",
                "${req.body.groomfathermiddlename}",
                "1",
                "1",
                "Ordinary")`;
            
                db.query(queryString3, (err, results, fields) => {
                    if (err) throw err;
                    var sponsorid=results;                
                    console.log(sponsorid);
                    var queryString4 = `INSERT INTO tbl_sponsorswedding(
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
                            return res.redirect('/guestwithsession/privatewedding/listofrequirements');
                        });
    
                }); 
            }); 
        }); 
    
    // });
});

router.post('/listofsponsors', (req, res) => {
    res.redirect('/guestwithsession/privatewedding/listofrequirements');
});

module.exports = router;