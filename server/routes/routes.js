var router = require('express').Router();

router.get('/', function(req, res, next) {
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

router.get('/annual-performance', function(req, res, next) {
    // res.render('service-goal');
    if (req.session.loggedin == true) {
        res.render('service-goal', {
            layout: 'layout'
        })
    } else {
        res.redirect('/login')
    } 
});

router.get('/timesheet', function(req, res, next) {
    // res.render('service-time');
    if (req.session.loggedin == true) {
        res.render('service-time', {
            layout: 'layout'
        })
    } else {
        res.redirect('/login')
    } 
});

router.get('/documents', function(req, res, next) {
    // res.render('service-docs');
    if (req.session.loggedin == true) {
        res.render('service-docs', {
            layout: 'layout'
        })
    } else {
        res.redirect('/login');
    } 
});

router.get('/contact', function(req, res, next) {
    // res.render('contact');
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

router.get('/login', function(req, res, next) {
    res.render('sign-in', { layout: 'loginLayout' });
});

router.get('/home', function(req, res, next) {
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

router.get('/error', function(req, res, next) {
    res.render('error', { layout: 'loginLayout' });
});

router.get('/logout', function (req, res) {
    req.session.destroy();
    res.redirect('/login');
});

router.get('/register', function(req, res, next) {
    res.render('sign-up', { layout: 'loginLayout' });
});

module.exports = router;