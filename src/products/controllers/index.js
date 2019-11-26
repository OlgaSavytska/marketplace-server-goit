const productsControllers = {
  sendAllProducts: require('./send_all_products'),
  sendOneProduct: require('./send_one_product'),
  sendSeveralProducts: require('./send_several_products'),
  sendProductsByCategory: require('./send_products_by_category')
};

module.exports = productsControllers;
