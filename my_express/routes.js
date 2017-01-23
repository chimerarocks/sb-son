var express = require('express');
var router = express.Router();

//um middleware somente para essa rota
router.use(function(req, res, next) {
  console.log('Iam router custom middleware');
  next();
});

router.get('/', function(req, res) {
  res.json({
    message: 'hello world'
  });
});

//a é opcinal, mas r obrigatório (no caso é uma regex)
router.get('/a?r', function(req, res) {
  res.send('router a?r')
});

router.get('/params/:name', function(req, res) {
 res.json({
   params : req.params,
   host   : req.host,
   headers: req.headers,
   port   : req.port
 });
});

router.post('/body', function(req, res) {
  res.json(req.body);
});

router.get('/res', function(req, res) {
  res.status(201).json({
    name: 'Joao'
  });
  //executa o send automaticamente
  // res.status(201).send('test'); //executa o end automaticamente

  // res.render('index', {
  //   data: 'data'
  // }); //renderizar um template
});

module.exports = router;