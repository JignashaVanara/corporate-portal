var router = require('express').Router();
const connection = require('../models/db');
 
//add efforts
router.post('/addefforts', async function (req, res, next) {
    console.log(req.body);
    let empid = req.session.empid;
    let ename = req.session.firstname;
    let day = req.body.day;
    let efforts = req.body.efforts;
    let comment = req.body.comment;
    let dbname = process.env.MYSQL_DB;

    await connection.query(`INSERT INTO ${dbname}.timesheet (empId, empName, day, efforts, comments) VALUES ( ?, ?, ?, ?, ?)`, [empid, ename, day, efforts, comment], function (err, rows, fields) {
        if (err) throw err
        res.json({ redirect: '/timesheet', message: 'Efforts logged successfully.' })
    })
})

module.exports = router;