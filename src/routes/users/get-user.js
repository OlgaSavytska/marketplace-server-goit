const userParent = require("../../modules/db/schemes/userScheme");

const getUser = (req, res) => {
    const userId = req.params.id;

    const sendError = () => {
        res.status(400);
        res.json({
            status: "error 404 not found"
        });
    };

    const sendResponse = user => {
        console.log(user);
        res.set("Content-type", "application/json");
        res.status(200);
        res.json({ status: "success", user });
    };

    userParent.findById(userId) = async (req, res) => {
        try {
            const sendResponse = await sendResponse(res);
            res.status(200);
        }
        catch (err) {
            const error = await sendError(res);
            res.status(400);
        }
    }
};


module.exports = getUser;
