const express = require('express');
const corsMiddleware = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const productsRouter = require('./products/products_routes');
const usersRouter = require('./users/users_routes');
const ordersRouter = require('./orders/orders_routes');

const app = express();

const errorHandler = (err, req, res, next)  => {
  res
    .status(500)
    .send('Error found: ' + err.stack);
};

const startServer = port => {
  app
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(express.json())
    .use(corsMiddleware())
    .use(morgan('dev'))
    .use('/products', productsRouter)
    .use('/users', usersRouter)
    .use('/orders', ordersRouter)
    .use(errorHandler);

  app.listen(port);

  console.log('Server was started at http://localhost:' + port);
};

module.exports = startServer;