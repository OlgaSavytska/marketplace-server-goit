
const express = require('express');
const mainRoute = require('./main/main');
const signUpRoute = require('./users/sign-up-route');
const getProducts = require('./products/products');
const getUsers = require('./users/sign-up-route');
const getOrder = require('./products/orders');
const apiRoutes = express.Router();

apiRoutes
    .get('/signup', signUpRoute)
    .get('/products/', getProducts)
    .get('/products/:id', getProducts)
    .get('/products/:category', getProducts)
    .get('/users/:id', getUsers)


    .post('/users', signUpRoute)
    .post('/orders', getOrder)



module.exports = apiRoutes;


