const userParent = require("../../modules/db/schemes/userScheme");
const bcrypt = require("bcrypt");

const createUser = req => {
    const user = req.body;
    const hashedPassword = user.password
        ? bcrypt.hashSync(user.password, 10)
        : null;

    const userData = new userParent({
        ...user,
        password: hashedPassword
    });

    return userData;
};

const saveUser = (req, res) => {
    const newUser = createUser(req);

    const sendError = () => {
        res.status(400);
        res.json({
            status: "error 400"
        });
    };

    const sendResponse = user => {
        console.log(user);
        res.set("Content-type", "application/json");
        res.status(200);
        res.json({ status: "success", user });
    };

    newUser
        .save()
        .then(sendResponse)
        .catch(sendError);
};

module.exports = saveUser;
