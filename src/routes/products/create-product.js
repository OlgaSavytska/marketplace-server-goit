const productParent = require('../../modules/db/schemes/product-scheme.js');

const createProduct = req => {
    const product = req.body;

    const productData = new productParent({
        ...product
    });

    return productData;
};

const saveProduct = (req, res) => {
    const newProduct = createProduct(req);

    const sendError = () => {
        res.status(400);
        res.json({
            status: "error 404 failed"
        });
    };

    const sendResponse = product => {
        res.set("Content-type", "application/json");
        res.status(200);
        res.json({ status: "success", product });
    };

    newProduct
        .save()
        .then(sendResponse)
        .catch(sendError);
};

module.exports = saveProduct;


