var express = require('express');
var http = require('http');
var bodyParser = require('body-parser')
var morgan = require('morgan');
var app = express();

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extend: true }));
app.use(bodyParser.json());

//database
var mongoDb = mongoose.connect('mongodb://localhost/ecommerce').connection;

mongoDb.on('connected', function() {
  console.log('MongoDB is connected');
});

mongoDb.on('error', function() {
  console.log('MongoDB ERROR');
});

//add routes
require('routes')(app);

//fire up express
server.listen(3000, function() {
  console.log('Express has been starged');
});