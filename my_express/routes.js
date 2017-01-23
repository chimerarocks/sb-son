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

module.exports = router;