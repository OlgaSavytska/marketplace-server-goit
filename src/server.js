const express = require('express');
const app = express();

const morgan = require('morgan');
const router = require('./routes/main/router');
const conect = require('./routes/connect-db');

const errorHandler = (req, res, next)  => {
    res.status(500).send('No such page');
    next();
};

const startServer = port => {
    app
        .use(morgan('dev'))
        .use('/', router)
        .use(errorHandler);


    app.listen(port);

    console.log('Server was started at http://localhost:' + port);
};




module.exports = startServer;
