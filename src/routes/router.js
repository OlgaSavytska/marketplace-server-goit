const mainRoute = require ('./main/main');
const signUpRoute = require ('./users/sign-up-route');
const productRequest = require ('./products/products');

const router = {
  '/signup': signUpRoute,
  '/products/': productRequest,
  default: mainRoute
};


module.exports = router;
