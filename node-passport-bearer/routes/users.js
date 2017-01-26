var express = require('express');
var router = express.Router();
var passport = require('passport');

var User = require('./../models/user');

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

router.post('/login', passport.authenticate('bearer', {session:false}),function(req, res) {
  var obj = {
    username: req.user.username,
    access_token: req.user.access_token
  };
  res.status(200).json({
    user: obj
  });
});

router.post('/auth', function(req, res) {
  User.findOne({
    username: req.body.username,
    password: req.body.password
  }, function(err, result) {
    if (err) {
      return;
    }
    var obj = {
      username: result.username,
      access_token: result.access_token
    };
    res.status(200).json({
      user: obj
    });
  });
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
