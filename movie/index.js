const Hapi = require('hapi');
const mongoose = require('mongoose');
const Horseman = require('node-horseman');

const server = new Hapi.Server();
server.connection({
	port: 3000
});

const db = mongoose.connect('mongodb://localhost/crawler').connection;
const horseman = new Horseman();

db.on('error', (err) => {
	console.log(`Mongoose Error = ${err}`)
})

server.route({
	method: 'GET',
	path: '/movies',
	handler: (req,replay) => {
		horseman
			.open('http://www.listchallenges.com/disney-movies')
            .evaluate(function() {
                $ = window.$ || window.jQuery;

                var movies = [];
                var skeleton = {
                    name: '',
                    year: ''
                };

                $('.item-name').each(function(index, el) {
                    var name = $(el).text();
                    var year = name.match(/\(([^)]+)\)/);

                    if (!year) {
                        return;
                    }

                    year = year[1];
                    name = name.replace(/\s*\(.*?\)\s*/g, '');

                    skeleton.name = name;
                    skeleton.year = year;

                    movies.push(skeleton);
                    skeleton = {
                        name: '',
                        year: ''
                    };
                });

                return movies;
            })
			.then(function(res) {
				replay(res)
			})
			.catch(function(err) {
				console.log(`There is an error: ${err}`)
			})
			.close();
	}
})

server.start((err) => {
	if (err) {
		throw err;
	}

	console.log(`Your hapi server has been ignite at: ${server.info.uri}`)
})