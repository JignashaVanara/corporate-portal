var router = require('express').Router();
var connection = require('../models/db');

//add efforts
router.post('/addefforts', function (req, res, next) {
    console.log(req.body);
    let empid = req.session.empid;
    let ename = req.session.firstname;
    let day = req.body.day;
    let efforts = req.body.efforts;
    let comment = req.body.comment;

    connection.query('INSERT INTO `pixelweb_db`.`timesheet` (`empId`, `empName`, `day`, `efforts`, `comments`) VALUES ( ?, ?, ?, ?, ?)', [empid, ename, day, efforts, comment], function (err, rows, fields) {
        if (err) throw err
        res.json({ redirect: '/timesheet', message: 'Efforts logged successfully.' })
    })
})

module.exports = router;