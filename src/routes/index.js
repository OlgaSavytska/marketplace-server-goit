const mainRoute = require('./main/main');
const productsRoute = require('./products/products');
const signUpRoute = require('./signup/signup');

const routes = {
    "/products": productsRoute,
    "/signup": signUpRoute,
    default: mainRoute,
}
module.exports = routes;