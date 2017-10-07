var router = require('express').Router();
var db = require('../../../lib/database')();
var authMiddleware = require('../../auth/middlewares/auth');
router.use(authMiddleware.hasAuthadmin);


router.get('/', authMiddleware.hasAuthadmin, (req, res) => {
    res.render('admin/records/views/records');
});

router.get('/annointment', authMiddleware.hasAuthadmin, (req, res) => {
    db.query('SELECT * FROM tbl_event WHERE char_event="Annointment"', (err, results, fields) => {
        if (err) console.log(err)
        return res.render('admin/records/views/annointmentrecords', { tbl_event: results });
    });
});

router.get('/baptismal', authMiddleware.hasAuthadmin, (req, res) => {
    db.query('SELECT * FROM tbl_event WHERE char_event="Baptismal"', (err, results, fields) => {
        if (err) console.log(err)
        return res.render('admin/records/views/baptismalrecords', { tbl_event: results });
    });
});

router.get('/funeralmass', authMiddleware.hasAuthadmin, (req, res) => {
    db.query('SELECT * FROM tbl_event WHERE char_event="Funeral"', (err, results, fields) => {
        if (err) console.log(err)
        return res.render('admin/records/views/funeralrecords', { tbl_event: results });
    });

});

router.get('/masswedding', authMiddleware.hasAuthadmin, (req, res) => {
    db.query('SELECT * FROM tbl_event WHERE char_event="Mass Wedding"', (err, results, fields) => {
        if (err) console.log(err)
        return res.render('admin/records/views/massweddingrecords', { tbl_event: results });
    });
});

router.get('/privatewedding', authMiddleware.hasAuthadmin, (req, res) => {
    db.query('SELECT * FROM tbl_event WHERE char_event="Private Wedding"', (err, results, fields) => {
        if (err) console.log(err)
        return res.render('admin/records/views/privateweddingrecords', { tbl_event: results });
    });
});




router.get('/annointment/view', authMiddleware.hasAuthadmin, (req, res) => {
    res.render('admin/records/views/annointmentinfo');
});

router.get('/baptismal/view', authMiddleware.hasAuthadmin, (req, res) => {
    res.render('admin/records/views/baptismalinfo');
});

router.get('/funeralmass/view', authMiddleware.hasAuthadmin, (req, res) => {
    res.render('admin/records/views/funeralinfo');
});

router.get('/masswedding/view', authMiddleware.hasAuthadmin, (req, res) => {
    res.render('admin/records/views/massweddinginfo');
});

router.get('/privatewedding/view', authMiddleware.hasAuthadmin, (req, res) => {
    res.render('admin/records/views/privateweddinginfo');
});

module.exports = router;
