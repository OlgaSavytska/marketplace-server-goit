const fs = require("fs");
const path = require('path');
const dataParser = require('../../helpers/dataParser');

const getProduct = (request, response) => {
  const id = request.params.id;

  const filePath = path.join(__dirname, '../../', 'db/', 'products', 'all_products.json');

  fs.readFile(filePath, function (err, data) {
    if (err) {
        return console.error(err);
    }

    const allProducts = dataParser(data);

    const product = allProducts.find((el) => el.id === Number(id));

    let res = {};
    if (!product) {
      res = {
        status: 'no products',
        products: []
      };

      response.status(404).json(res);
    } else {
      res = {
        status: 'success',
        products: [product]
      };

      response.status(200).json(res);
    }
  });
};

module.exports = getProduct;
