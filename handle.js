var querystring = require('querystring');

function handle(request, response) {
  response.writeHead(200, {
    'Content-Type': 'text/html'
  });

  var body = '';

  request.on('data', function (data) {
    body += data.toString();
  });

  request.on('end', function () {
    var decode = querystring.parse(body);
    console.log(decode)
  });

  response.write('<!DOCTYPE html>');
  response.write('<html>');
  response.write('<head>');
  response.write('<title>HTTP module</title>');
  response.write('</head>');
  response.write('<body>');
  response.write('<h1>Hello from http module</h1>');
  response.write('</body>');
  response.write('</html>');
  response.end();
}

// o Node só executará o module.exports porque tem prioridade, visto que exports é um alias
module.exports = handle;
exports.fn = handle;
