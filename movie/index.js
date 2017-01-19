const Hapi = require('hapi');
const mongoose = require('mongoose');

const server = new Hapi.Server();
server.connection({
	port: 3000
});

const db = mongoose.connect('mongodb://localhost/crawler').connection;

db.on('error', (err) => {
	console.log(`Mongoose Error = ${err}`)
})

server.route({
	method: 'GET',
	path: '/',
	handler: (req,replay) => {
		replay('Hello from Hapi.js')
	}
})

server.start((err) => {
	if (err) {
		throw err;
	}

	console.log(`Your hapi server has been ignite at: ${server.info.uri}`)
})