var express     = require('express');
// var http     = require('http');
var bodyParser  = require('body-parser');
var path        = require('path');
var app         = express();
var routes      = require('./routes')

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

//Deve ser declarado antes dos middlewares serão afetadas por ele
app.use(function(req, res, next) {
  console.log('im a custom middleware');
  next();
});


app.get('/err', function(req, res, next) {
  next(new Error('custom error'));
});

//Sem Router
app.get('/', function(req, res) {
  res.render('index', {
    message: 'Hello world from express by SON'
  });
  // res.send('Hello world from express by SON');
});

//Com Router (mais utilizada, pela separação de endpoints)
app.use('hello', routes);

//o primeiro argumento ('public') é opcional, no caso os arquivos são acessados usando /public/ e o diretório
app.use('/public', express.static(path.join(__dirname, 'public')));

//Esses quatro parâmetros indicam que é um middleware de erro, deve obrigatoriamente estar abaixo de todos os middlewares
app.use(function(err, req, res, next) {
  res.status(500)
    .json({
      message: 'Something wrong happens.'
    });
});

// Com http server
// http.createServer(app).listen(3000, function() {
//   console.log('Express started');
// });

// Sem o http server
app.listen(3000, function() {
  console.log('Express started');
});
