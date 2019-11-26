const fs = require("fs");
const path = require('path');
const dataParser = require('../../helpers/dataParser');

const getProducts = (request, response) => {
  const categoryStr = Object.values(request.query)[0];
  const category = categoryStr.slice(1, categoryStr.length - 1);

  const filePath = path.join(__dirname, '../../', 'db/', 'products', 'all_products.json');

  fs.readFile(filePath, function (err, data) {
    if (err) {
        return console.error(err);
    }

    const allProducts = dataParser(data);

    const products = allProducts.filter(el => {
      return el.categories.find(elem => elem === category);
    });

    let res = {};
    if (products.length === 0) {
      res = {
        status: 'no products',
        products: []
      };

      response.status(404).json(res);
    } else {
      res = {
        status: 'success',
        products: products
      };

      response.status(200).json(res);
    }
  });
};

module.exports = getProducts;
