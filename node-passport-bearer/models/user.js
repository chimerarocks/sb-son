var mongoose = require('mongoose');

var User = mongoose.Schema({
  username: String,
  password: String,
  access_token: String
});

module.exports = mongoose.model('User', User);