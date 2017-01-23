var express = require('express');
var router = express.Router();
var passport = require('passport');

var User = require('././user');

// Register
router.get('/', function(req, res, next) {
  res.render('register');
});

router.post('/', function(req, res) {
  User.create(req.body, function(err, created) {
    if(err) {
      return;
    }
    res.status(200).json({
      data: created
    })
  });
});

//Login
router.get('/login', function(req, res) {
  res.render('login', {});
});

router.post('/login', function(req, res) {
  res.redirect('/');
});

// Delete
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
