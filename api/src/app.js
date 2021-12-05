const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index.js');
var cors = require('cors');
const path = require('path');

require('./db.js');
//inicializo servidor
const server = express();

server.name = 'API';
//middlewares
server.use(cors());
server.use(morgan('dev'));
server.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	next();
});
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(express.static(path.join(__dirname, 'public')));

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => {
	const status = err.status || 500;
	const message = err.message || err;
	console.error(err);
	res.status(status).send(message);
});

module.exports = server;