var express = require('express');
var router = express.Router();

var User = require('./../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('register');
});

router.post('/', function(req, res) {
  //Utiliza os métodos do plugin
  User.register(new User({username: req.body.username}), req.body.password, function(err) {
    if (err) {
      return;
    }
    res.redirect('/login');
  });
});

router.post('/:id', function(req, res) {
  //Utiliza os métodos do plugin
  User.findByIdAndRemove(req.params.id, function(err, deleted) {
    if (err) {
      return;
    }
    res.redirect('/users');
  })
});

module.exports = router;
