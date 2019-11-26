const fs = require("fs");
const path = require('path');
const dataParser = require('../../helpers/dataParser');

const getUser = (request, response) => {
  const id = request.params.id;;

  const filePath = path.join(__dirname, '../../', 'db/', 'users', 'all_users.json');

  fs.readFile(filePath, function (err, data) {
    if (err) {
        return console.error(err);
    }

    const allUsers = dataParser(data);

    const user = allUsers.find((el) => el.id === Number(id));

    let res;

    if (user) {
      res = {
        status: 'success',
        user: [user]
      };

      response.status(200).json(res);
    } else {
      res = {
        status: 'not found'
      };

      response.status(404).json(res);
    }
  });
};

module.exports = getUser;