const fs = require('fs');
const path = require('path');
const dataParser = require('../../helpers/dataParser');

const getProducts = (request, response) => {
  const idsStr = Object.values(request.query)[0];
  const ids = idsStr.slice(1, idsStr.length - 1).split(',');

  const filePath = path.join(__dirname, '../../', 'db/', 'products', 'all_products.json');

  fs.readFile(filePath, function (err, data) {
    if (err) {
        return console.error(err);
    }

    const allProducts = dataParser(data);

    const products = allProducts.filter(el => {
      return ids.find(elem => el.id === Number(elem));
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
        products
      };

      response.status(200).json(res);
    }
  });
};

module.exports = getProducts;

