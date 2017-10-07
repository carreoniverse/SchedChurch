var router = require('express').Router();
var db = require('../../../lib/database')();
var authMiddleware = require('../../auth/middlewares/auth');
//router.use(authMiddleware.hasAuthadmin);

router.post('/', (req, res) => {
    var queryString = `INSERT INTO \`int_guestId\` (\`int_annoinmentId\`,\`int_annointrelation\`,\`char_annointmentName\`, \`date_annointbirth\` \`date_annointmentSchedule\`, \`varchar_annoinmentAddress\`)
    VALUES("${req.body.annointrelationship}", "${req.body.annointname}", ${req.body.annointbirth},${req.body.annointdate},"${req.body.annointaddress}");`;
    });


router.get('/', (req, res) => {
    res.render('admin/annointment/views/annointmentreservation');
});
module.exports = router;