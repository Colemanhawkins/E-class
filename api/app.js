const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const server = express();

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));


server.use('/', routes);


server.listen(3001, () => {
    console.log('..🦕.. listening at Port 3001 ..🦕..'); // eslint-disable-line no-console
});

module.exports = server;