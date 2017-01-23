var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var User = mongoose.Schema({});
//Definir tudo o necessário para a autenticação.
User.plugin(passportLocalMongoose);

module.exports = mongoose.modle('User', User);