const userParent = require("../../modules/db/schemes/userScheme");

const deleteUser = (req, res) => {
    const userId = req.params.id;

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

    userParent.findById(userId)
        .deleteOne()
        .then(sendResponse)
        .catch(sendError);
};

module.exports = deleteUser;