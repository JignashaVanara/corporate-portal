var router = require('express').Router();
var userData = require('../src/User.js');
var connection  = require('../lib/db');

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

router.get('/about', function(req, res, next) {
    // res.render('home');
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
        res.render('service-goal', {
            layout: 'loginLayout'
        })
    } 
});

router.get('/timesheet', function(req, res, next) {
    // res.render('service-time');
    if (req.session.loggedin == true) {
        res.render('service-time', {
            layout: 'layout'
        })
    } else {
        res.render('service-time', {
            layout: 'loginLayout'
        })
    } 
});

router.get('/documents', function(req, res, next) {
    // res.render('service-docs');
    if (req.session.loggedin == true) {
        res.render('service-docs', {
            layout: 'layout'
        })
    } else {
        res.render('service-docs', {
            layout: 'loginLayout'
        })
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

//authenticate user
router.post('/authentication', function(req, res, next) {
       
    var email = req.body.username;
    var pwd = req.body.pass;
    console.log(email);
    console.log(pwd);
 
        connection.query('SELECT * FROM pixelweb_db.users WHERE email = ? AND password = ?', [email, pwd], function(err, rows, fields) {
            if(err) throw err
             
            // if user not found
            if (rows.length <= 0) {
                req.flash('error', 'Please enter correct email and Password!');
                res.redirect('/login');
            }
            else { // if user found
                req.session.loggedin = true;
                res.redirect('/home');
 
            }            
        })
})

//add user
router.post('/newuser', function(req, res, next) {
       
    console.log(req.body);
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var username = req.body.username;
    var email = req.body.email;
    var pass = req.body.pass;
    var confirm_pass = req.body.confirm_pass;
 
        connection.query('INSERT INTO `pixelweb_db`.`users` (`firstname`, `lastname`, `username`, `email`, `password`, `confirm-password`) VALUES ( ?, ?, ?, ?, ?, ?)', [firstname, lastname, username, email, pass, confirm_pass], function(err, rows, fields) {
            if(err) throw err
             
            req.flash('registration', 'User registered successfully.');
            res.redirect('/login');         
        })
})

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