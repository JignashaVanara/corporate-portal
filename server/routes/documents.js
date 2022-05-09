var router = require('express').Router();
var connection = require('../models/db');
const multer = require('multer');
var path = require('path');

var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './public/files/')
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({
    storage: storage
});

router.post("/fileupload", upload.single('file'), (req, res, next) => {
    if (!req.file) {
        console.log("No file upload");
    } else {
        let empid = req.session.empid;
        let ename = req.session.firstname;
        let doctype = req.body.empdocs;
        let monthyear = req.body.my;
        let imgsrc = '/files/' + req.file.filename
        let year = (monthyear.split("-"))[0];
        let month = (monthyear.split("-"))[1];
        let fileextention = path.extname(req.file.originalname);

        if (fileextention == ".doc") {
            filesvg = 'images/svg/file-word-solid.svg';
        } else if (fileextention == ".pdf") {
            filesvg = 'images/svg/file-pdf-solid.svg';
        } else {
            filesvg = 'images/svg/file-solid.svg';
        }

        connection.query('INSERT INTO `documents` (`empId`, `empName`, `docType`, `fileURL`, `fileIcon`, `month`, `year`, `uploadedAt`) VALUES ( ?, ?, ?, ?, ?, ?, ?, NOW())', [empid, ename, doctype, imgsrc, filesvg, month, year], (err, result) => {
            if (err) throw err
            console.log("file uploaded.")
            res.redirect('/documents');
        })
    }
});

module.exports = router;