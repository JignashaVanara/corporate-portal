const router = require('express').Router();
const connection = require('../models/db');
let dbname = process.env.MYSQL_DB; 

//authenticate user
router.post('/authentication', function (req, res, next) {

    let username = req.body.username;
    let pwd = req.body.pass;

    connection.query(`SELECT * FROM ${dbname}.employee WHERE username = ? AND password = ?`, [username, pwd], function (err, rows, fields) {
        if (err) throw err

        // if user not found
        if (rows.length <= 0) {
            req.flash('error', 'Please enter correct username and Password!');
            res.redirect('/login');
        }
        else { // if user found
            req.session.loggedin = true;
            req.session.username = username;
            req.session.firstname = rows[0].firstname;
            req.session.lastname = rows[0].lastname;
            req.session.empid = rows[0].empid;
            res.redirect('/home');
        }
    })
})

//add user
router.post('/adduser', function (req, res, next) {

    console.log(req.body);
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let username = req.body.username;
    let email = req.body.email;
    let pass = req.body.pass;
    let confirm_pass = req.body.confirm_pass;

    connection.query(`INSERT INTO ${dbname}.employee ('firstname', 'lastname', 'username', 'email', 'password', 'confirm_password') VALUES ( ?, ?, ?, ?, ?, ?)`, [firstname, lastname, username, email, pass, confirm_pass], function (err, rows, fields) {
        if (err) throw err
        req.flash('registration', 'User registered successfully.');
        res.redirect('/login');
    })
})

//update emp profile
router.put('/editempprofile', function (req, res, next) {
    console.log('inside edit profile route....');
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let username = req.body.username;
    let empid = req.session.empid;
    if (firstname == '') firstname = req.session.firstname;
    if (lastname == '') lastname = req.session.lastname;
    if (username == '') username = req.session.username;
    connection.query(`UPDATE ${dbname}.employee SET firstname = ?, lastname = ?, username = ? WHERE empid = ?`, [firstname, lastname, username, empid], function (err, rows, fields) {
        if (err) throw err
        res.json({ redirect: '/login' })
    })
})

//delete emp account
router.delete('/deleteaccount', function (req, res, next) {
    console.log('inside delete route....');
    let empid = req.session.empid;
    connection.query(`DELETE FROM ${dbname}.employee WHERE empid = ?`, [empid], function (err, rows, fields) {
        if (err) throw err
        res.json({ redirect: '/login' })
    })
})

module.exports = router;