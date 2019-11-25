const productParent = require('../../modules/db/schemes/product-scheme.js');

const deleteProduct = (req, res) => {
    const productId = req.params.id;

    const sendError = () => {
        res.status(400);
        res.json({
            status: "error 400"
        });
    };

    const sendResponse = user => {
        res.set("Content-type", "application/json");
        res.status(200);
        res.json({ status: "success" });
    };

    productParent.findById(productId)
        .deleteOne()
        .then(sendResponse)
        .catch(sendError);
};

module.exports = deleteProduct;
