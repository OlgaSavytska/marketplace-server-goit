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

    userParent.find = async (req, res) => {
        try {
            const sendResponse= await sendResponse(res);
            res.status(200);
        }
        catch (err) {
            const error = await sendError(res);
            res.status(400);
        }
    }
};


module.exports = getAllUsers;
