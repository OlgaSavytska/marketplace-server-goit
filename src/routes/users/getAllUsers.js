const userParent = require("../../modules/db/schemes/userScheme");

const getAllUsers = (req, res) => {
    const sendError = () => {
        res.status(400);
        res.json({
            status: "error 404 not found"
        });
    };

    const sendResponse = users => {
        console.log(users);
        res.set("Content-type", "application/json");
        res.status(200);
        res.json({ status: "success", users });
    };

    userParent.find()
        .then(sendResponse)
        .catch(sendError);
};

module.exports = getAllUsers;
