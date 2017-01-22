var express = require('express');
var http = require('http');
var bodyParser = require('body-parser')
var morgan = require('morgan');
var mongoose = require('mongoose');
// var cors = require('cors');

var app = express();
var server     = http.createServer(app);

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extend: true }));
app.use(bodyParser.json());

//cors
// var whitelist = [
//   'http://google.com',
//   'http://expressjs.com'
// ];
// app.use(cors({
//   origin: function(origin, cb) {
//     var index = whitelist.index(origin);
//     if (index !== -1) {
//       cb(null, index);
//     }
//   },
//   methods: ['GET', 'POST', 'PUT']
// }));

// app.use(function(req,res,next) {
//   res.header('Access-Control-Allow-Origin', 'http://expressjs.com');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
// });
// app.use(function(req,res,next) {
//   res.header('Access-Control-Allow-Origin', 'http://expressjs.com');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
// });

//database
var mongoDb = mongoose.connect('mongodb://localhost/ecommerce').connection;

mongoDb.on('connected', function() {
  console.log('MongoDB is connected');
});

mongoDb.on('error', function() {
  console.log('MongoDB ERROR');
});

//add routes
require('./routes')(app);

//fire up express
app.listen(3000, function() {
  console.log('Express has been starged');
});