var express = require('express');
var router = express.Router();

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

module.exports = router;