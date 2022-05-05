require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs');
var expressValidator = require('express-validator');
var flash = require('express-flash');
var session = require('express-session');
var favicon = require('serve-favicon')
var userRoutes = require('./server/routes/user');
var serviceTimesheetRoutes = require('./server/routes/timesheet');
var serviceGoalsRoutes = require('./server/routes/goals');
var serviceDocsRoutes = require('./server/routes/documents');
var sql = require('./server/models/sql');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
hbs.registerPartials(__dirname + '/views/partials');
app.engine('html', require('hbs').__express);
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  cookie: { maxAge: 60000 },
  secret: 'pixelweb',
  resave: false,
  saveUninitialized: false
}));

app.use(flash());
app.use(expressValidator());

//CORS middleware
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  next();
});

app.use('/', require('./server/routes/routes'));
app.use('/api/user', userRoutes);
app.use('/api/timesheet', serviceTimesheetRoutes);
app.use('/api/goal', serviceGoalsRoutes);
app.use('/api/docs', serviceDocsRoutes);
sql.createTable();

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  // next(createError(404));
  res.redirect('/error').status(404);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
