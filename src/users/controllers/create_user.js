const fs = require('fs');
const path = require('path');
const dataParser = require('../../helpers/dataParser');

const saveUser = userString => {
  const user = dataParser(userString);

  const pathToUserFolder = path.join(__dirname, '../../', 'db/', 'users/', `${user.id}`);
  const pathToUserFile = path.join(pathToUserFolder, `${user.username}.json`);

  return new Promise((resolve, reject) => {
    fs.mkdir(pathToUserFolder, { recursive: true }, (err) => {
      if (err) reject(err);
      fs.writeFile(pathToUserFile, userString,  (err) => {
         if (err) reject(err);
         resolve(user);
      });
    });
  });
};

const signUpRoute = (request, response) => {
  if (request.method !== 'POST') return;

  const user = request.body;

  if (!user && user.username && user.password && user.telephone && user.email) {
    response.status(400).send('Bad Request');
    return;
  }

  const userWithId = {
    ...user,
    id: Date.now()
  };

  const filePath = path.join(__dirname, '../../', 'db/', 'users', 'all_users.json');

  fs.readFile(filePath, function (err, data) {
    if (err) {
        return console.error(err);
    }

    const allUsers = dataParser(data);
    allUsers.push(userWithId);

    fs.writeFile(filePath, JSON.stringify(allUsers), function (err) {
      if (err) throw err;
    });
  });

  saveUser(JSON.stringify(userWithId)).then(user => {
    const res = {
      status: 'success',
      user
    };

    response.status(201).json(res);
  }).catch(err => response.status(400).json({error: err}));
};

module.exports = signUpRoute;