var http = require('http');
var handle = require('./handle');

var events = require('events')
var emitter = new events.EventEmitter();

// emitter.on('say', say);
//
// function say() {
//   console.log('im say');
// }
//
// emitter.emit('say');

var server = http.createServer(handle);

server.listen(3000, function() {
  console.log('Server is listening at port 3000')
});