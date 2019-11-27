const orderParent = require('../../modules/db/schemes/order-scheme.js');
const productParent = require('../../modules/db/schemes/product-scheme.js');
const userParent = require("../../modules/db/schemes/userScheme");

const createOrder = req => {
    const order = req.body;

    return new orderParent({
        ...order
    });
};

const saveOrder = async (req, res) => {
    try {
        const newOrder = await createOrder(res);
        res.status(200);
    } catch (err) {
        res.status(400);
    }

    const saveOrderFromUser = async order => {
        const userId = await order.creator;
        try {
            const orderId = await order._id;
            user.orders = [...user.orders, orderId];
            user.save().then(order);
            return Promise.resolve(order);
            res.status(200);
        }
        catch (notFoundUser) {
            res.status(400);
        };
    };

    const notFoundUser = () => {
        res.status(400);
        res.json({
            status: "error 404 User not found!"
        });
    };

    const sendError = () => {
        res.status(400);
        res.json({
            status: "error 400"
        });
    };

    const sendResponse = order => {
        res.set("Content-type", "application/json");
        res.status(200);
        res.json({ status: "success", order });
    };

    saveOrderFromUser(newOrder) = async (req, res) => {
        try {
            const sendResponse = await sendResponse(res);
            res.status(200);
        }
        catch (err) {
            const error = await sendError(res);
            res.status(400);
        }
    }
}

module.exports = saveOrder;
