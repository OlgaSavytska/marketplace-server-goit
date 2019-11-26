const fs = require('fs');
const path = require('path');

const sendAllProducts = (request, response) => {
  const filePath = path.join(__dirname, '../../', 'db/', 'products', 'all_products.json');
  response.set('Content-Type', 'application/json');
  response.status(200);

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(response);
};

module.exports = sendAllProducts;