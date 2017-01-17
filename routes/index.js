var express = require('express');
var router = express.Router();
var request = require('request')
var cheerio = require('cheerio')

/* GET home page. */
router.get('/', function(req, res, next) {
  var options = {
  	url: 'http://www.themovieblog.com/category/features/reviews/',
  	method: 'GET'
  }

  request(options, function(err, response, body) {
  	if (err || response.statusCode != 200) {
  		return;
  	}

  	var $ = cheerio.load(body);

  	res.end($('.genaral-post-item').toString())
  })
});

module.exports = router;
