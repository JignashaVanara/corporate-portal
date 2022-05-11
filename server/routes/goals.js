var router = require('express').Router();
var connection = require('../models/db');

router.post('/addcomments', function (req, res, next) {
    console.log(req.body);
    let empid = req.session.empid;
    let ename = req.session.firstname;
    let goaltype = req.body.goaltype;
    let goalname = req.body.goalname;
    let comment = req.body.comment;
    let dbname = process.env.MYSQL_DB; 

    connection.query(`INSERT INTO ${dbname}.goals (empId, empName, goalType, goalName, createdAt, comments) VALUES ( ?, ?, ?, ?, NOW(), ?)`, [empid, ename, goaltype, goalname, comment], function (err, rows, fields) {
        if (err) throw err
        res.json({ redirect: '/annual-performance', message: 'Comment added successfully.' })
    })
})

module.exports = router;