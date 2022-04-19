var router = require('express').Router();
// var userData = require('./../src/User.js');

router.get('/', function(req, res, next) {
    res.render('home');
});

router.get('/home', function(req, res, next) {
    res.render('home');
});

router.get('/api/user', function(req, res, next) {
    // res.send('user data fetch');
    const id = Math.random();
    const firstName = req.query.firstname;
    const lastName = req.query.lastname;
    const dob = req.query.birthdate;
    const userName = req.query.username;
    const email = req.query.email;
    const password = req.query.pass;

  res.send({
    'id': id,
    'firstName': firstName,
    'lastName': lastName,
    'dob': dob,
    'userName': userName,
    'email': email,
    'password': password
  });

//   userData.User(id, firstName, lastName, dob, userName, email, password);

});

router.get('/about', function(req, res, next) {
    res.render('home');
});

router.get('/annual-performance', function(req, res, next) {
    res.render('service-goal');
});

router.get('/timesheet', function(req, res, next) {
    res.render('service-time');
});

router.get('/documents', function(req, res, next) {
    res.render('service-docs');
});

router.get('/contact', function(req, res, next) {
    res.render('contact');
});

router.get('/login', function(req, res, next) {
    res.render('sign-in');
});

router.get('/register', function(req, res, next) {
    res.render('sign-up');
});

module.exports = router;