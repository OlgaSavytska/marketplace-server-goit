const productParent = require('../../modules/db/schemes/product-scheme.js');

const getAllProduct = (req, res) => {
    const sendError = () => {
        res.status(400);
        res.json({
            status: "error 400"
        });
    };

    const sendResponse = products => {
        console.log(products);
        res.set("Content-type", "application/json");
        res.status(200);
        res.json({ status: "success", products });
    };

    productParent.find = async (req, res) => {
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


module.exports = getAllProduct;
