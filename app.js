var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();





var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var blogtipsRouter = require('./routes/blogtips');
var blogknowledgeRouter = require('./routes/blogknowledge');

// Create a service (the app object is just a callback).
var app = express();

var port = process.env.PORT || 3000;
app.listen(port);
console.log(`Your port is ${port}`); 

// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');



//body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

//Mongoose connect
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://kentsharedtips:VclhCg9RXBlNaoLm@cloudmongo01.d5cs9.mongodb.net/kentsharedtips?retryWrites=true&w=majority'), {useNewUrlParser: true, useUnifiedTopology: true};


const blogfeedback = require('./Models/blogfeedback'); //declare model blogfb
const contact = require('./Models/contact'); //delare model contact

// Push blogfeedback data to Mongo
app.post("/blogfeedback", function(req, res){
    var blogfb = new blogfeedback({
      name:req.body.name,
      email:req.body.email,
      title:req.body.title,
      note:req.body.note
    });

    blogfb.save(function(err){
      if(err){
        res.json({kq: 0});
      }
      else{
        res.redirect("back");
        
      }
    })
    
});

//Push contact data to mongo
app.post("/contact", function(req, res){
    var contactform = new contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    });

    contactform.save(function(err){
      if(err){
        res.json({kq:0});
      }
      else{
        res.redirect("back");
      }
    })
});


//use helmet
const helmet = require('helmet');
app.use(
  helmet.frameguard(
  {action: 'deny'})
  );


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/blogtips', blogtipsRouter);
app.use('/blogknowledge', blogknowledgeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


var seo = require('express-seo')(app);
// For internatanalization, set the supported languages
seo.setConfig({
  langs: ["vi", "en"]
});







module.exports = app;
