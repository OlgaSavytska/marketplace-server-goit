const fs = require('fs');
const path = require('path');

const sendAllUsers = (request, response) => {
  const filePath = path.join(__dirname, '../../', 'db/', 'users', 'all_users.json');
  response.set('Content-Type', 'application/json');
  response.status(200);

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(response);
};

module.exports = sendAllUsers;