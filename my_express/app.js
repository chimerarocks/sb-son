var express = require('express');
// var http    = require('http');
var bodyParser = require('body-parser');
var app     = express();
var routes  = require('./routes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

//Sem Router
app.get('/', function(req, res) {
  res.send('Hello world from express by SON');
});

//Com Router (mais utilizada, pela separação de endpoints)
app.use('hello', routes);

// Com http server
// http.createServer(app).listen(3000, function() {
//   console.log('Express started');
// });

// Sem o http server
app.listen(3000, function() {
  console.log('Express started');
});
