const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const methodOverride = require('method-override');

// load the env vars
require('dotenv').config();

// create the Express app
var app = express();

// connect to the MongoDB with mongoose
require('./config/database');
// load and config passport.js
require('./config/passport');

// require our routes
var indexRoutes = require('./routes/index');
var usersRoutes = require('./routes/users');
var postsRoutes = require('./routes/posts');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
   secret: 'SEIRocks!',
   resave: false,
   saveUninitialized: true
 }));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

// mount all routes with appropriate base paths
app.use('/', indexRoutes);
app.use('/', usersRoutes);
app.use('/posts', postsRoutes);

// invalid request, send 404 page
app.use(function(req, res) {
  res.status(404).send('Cant find that!');
});

module.exports = app;
