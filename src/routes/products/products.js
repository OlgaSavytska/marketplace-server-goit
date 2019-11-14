const productsDB = require('../../db/products/all-products.json');
const url = require('url');
const querystring = require('querystring');

const products = (req, res) => {
    if (req.method === "GET") {
        // regexp pattern to find products/:id url
        const productIdUrl = /\/products\/\d+/i;
        const {
            query
        } = url.parse(req.url);

        // products/:id
        if (req.url && req.url.match(productIdUrl)) {
            // reqexp lookahead & lookbehind match id in products/:id url after slash
            const productMatch = req.url.match(/(?<=\/)\d+|(?<=\/)\d+(?=\/)/);
            const productId = Number(productMatch[0]);
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            const requestProduct = productsDB.find((product) => product.id === productId);


            // check if product with request id exists
            if (requestProduct) {
                const result = {
                    status: "success",
                    products: [requestProduct],
                }
                res.writeHead(200, {
                    'Content-Type': 'application/json'
                });
                res.write(JSON.stringify(result));
            } else {
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });
                res.write('404 not found');
            }


            // products/?ids='123,124'
        } else if (query.includes('ids')) {

            // find all characters after ids in brackets
            const idString = query.match(/(?<=ids=').+(?='|'&)|(?<=ids=%27).+(?=%27|%27&)|(?<=ids=%22).+(?=%22|%22&)/);
            const idList = idString && idString[0].split(',');
            const requestProducts = productsDB.filter((product) => idList.includes(String(product.id)));


            // check if products with request ids exists
            if (requestProducts.length) {
                const result = {
                    status: "success",
                    products: requestProducts,
                };
                res.writeHead(200, {
                    'Content-Type': 'application/json'
                });
                res.write(JSON.stringify(result));
            } else {
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });
                res.write('404 not found');
            }


            // products/?category="drinks"
        } else if (query.includes('category')) {

            const queryObj = querystring.parse(req.url);
            const queryValue = Object.values(queryObj)[0];
            const requestProducts = productsDB.filter((product) => {
                return product.categories.includes(queryValue.replace(/'|"/g, ''));
            });
            const result = {
                status: "success",
                products: requestProducts,
            };
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.write(JSON.stringify(result));



        } else {

            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.write(JSON.stringify(productsDB));
        }

    }
    res.end();
}
module.exports = products;