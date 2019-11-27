const productParent = require('../../modules/db/schemes/product-scheme.js');

const getProductById = (req, res) => {
    const productId = req.params.id;

    const sendError = () => {
        res.status(400);
        res.json({
            status: "error 400"
        });
    };

    const sendResponse = product => {
        console.log(product);
        res.set("Content-type", "application/json");
        res.status(200);
        res.json({ status: "success", product });
    };

    productParent.findById(productId) = async (req, res) => {
        try {
            const deleteOne = await sendResponse(res);
            res.status(200);
        }
        catch (err) {
            const error = await sendError(res);
            res.status(400);
        }
    }
};

module.exports = getProductById;
