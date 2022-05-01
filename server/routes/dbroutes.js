var router = require('express').Router();
// var userData = require('../src/User.js');
var connection  = require('../lib/db');

//authenticate user
router.post('/authentication', function(req, res, next) {
     
    var username = req.body.username;
    var pwd = req.body.pass;
    
    connection.query('SELECT * FROM pixelweb_db.users WHERE username = ? AND password = ?', [username, pwd], function(err, rows, fields) {
        if(err) throw err
            
        // if user not found
        if (rows.length <= 0) {
            req.flash('error', 'Please enter correct username and Password!');
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

module.exports = router;