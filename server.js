var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');
var passport = require('passport');
var router = require('./Routing/routes');
var mongoose = require('mongoose');
var DB_URI = "mongodb://localhost:27017/seproject";

var app = express();
var db = mongoose.connect(DB_URI);

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'public/views'));
app.engine('html',require('ejs').renderFile);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/public'));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))


app.use('/',router);


app.listen(8081,function(){
  console.log('Listening on port 8080..');
});
