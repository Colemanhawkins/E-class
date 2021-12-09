const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3001

const server = express();

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));


server.use('/', routes);


server.listen(PORT, () => {
    console.log(`..🦕.. listening at Port ${PORT} ..🦕..`); // eslint-disable-line no-console
});

module.exports = server;