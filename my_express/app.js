var express = require('express');
var http    = require('http');
var app     = express();

app.get('/', function(req, res) {
  res.send('Hello world from express by SON');
});

// Com http server
http.createServer(app).listen(3000, function() {
  console.log('Express started');
});

// Sem o http server
// app.listen(3000, function() {
//   console.log('Express started');
// });