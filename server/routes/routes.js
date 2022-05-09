const router = require('express').Router();
const connection = require('../models/db');

router.get('/', function (req, res, next) {
    if (req.session.loggedin == true) {
        res.render('home', {
            layout: 'layout'
        })
    } else {
        res.render('home', {
            layout: 'loginLayout'
        })
    }
});

router.get('/annual-performance', function (req, res, next) {
    if (req.session.loggedin == true) {
        connection.query('SELECT * FROM `goals`', function (err, rows, fields) {
            if (err) throw err

            res.render('service-goal', {
                layout: 'layout',
                data: rows
            })
        })
    } else {
        res.redirect('/login')
    }
});

router.get('/timesheet', function (req, res, next) {
    if (req.session.loggedin == true) {
        res.render('service-time', {
            layout: 'layout',
            empid: req.session.empid,
            ename: req.session.firstname
        })
    } else {
        res.redirect('/login')
    }
});

router.get('/documents', function (req, res, next) {
    if (req.session.loggedin == true) {
        connection.query('SELECT * FROM `documents`', function (err, rows, fields) {
            if (err) throw err
            const payslipData = rows.filter(row => row && row.docType && row.docType === "PaySlips");
            const resumeData = rows.filter(row => row && row.docType && row.docType === "Resume");
            const offerLetterData = rows.filter(row => row && row.docType && row.docType === "OfferLetter");
            const acrData = rows.filter(row => row && row.docType && row.docType === "AnnualCompensation");

            res.render('service-docs', {
                layout: 'layout',
                odata: offerLetterData,
                pdata: payslipData,
                rdata: resumeData,
                acdata: acrData
            })
        })
    } else {
        res.redirect('/login');
    }
});

router.get('/contact', function (req, res, next) {
    if (req.session.loggedin == true) {
        res.render('contact', {
            layout: 'layout'
        })
    } else {
        res.render('contact', {
            layout: 'loginLayout'
        })
    }
});

router.get('/login', function (req, res, next) {
    res.render('sign-in', { layout: 'loginLayout' });
});

router.get('/home', function (req, res, next) {
    if (req.session.loggedin) {
        res.render('home', {
            layout: 'layout'
        })
    } else {
        res.render('home', {
            layout: 'loginLayout'
        })
    }
});

router.get('/editprofile', function (req, res, next) {
    if (req.session.loggedin) {
        let username = req.session.username;
        let firstname = req.session.firstname;
        let lastname = req.session.lastname;
        res.render('editprofile', {
            layout: 'layout',
            fname: firstname,
            lname: lastname,
            uname: username
        })
    } else {
        res.redirect('/login');
    }
});

router.get('/error', function (req, res, next) {
    res.render('error', { layout: 'loginLayout' });
});

router.get('/logout', function (req, res) {
    req.session.destroy();
    res.redirect('/login');
});

router.get('/register', function (req, res, next) {
    res.render('sign-up', { layout: 'loginLayout' });
});

module.exports = router;