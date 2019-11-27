const fs = require("fs");
const path = require("path");

const signUpRoute = (request, response) => {
    if (request.method === 'POST') {

        request.on('end', function (data) {

            let receivedData = JSON.parse(data);
            let username = receivedData.name;

            let date = new Date();
            receivedData.id = date.getTime();
            console.log(receivedData);

            fs.appendFile(
                "src/db/users/all-users.json",
                "," + JSON.stringify(receivedData),

                err => {
                    if (err) throw err;
                }
            );
            response.writeHead(200, { "Content-Type": "application/json" });

            response.write(JSON.stringify({ status: "success", user: receivedData }));
            response.end();
        });

    } else {
        response.writeHead(400, { "Content-Type": "text/html" });
        response.write(
            `<h1> ERROR. Suspected "POST" method but got "${request.method}" </h1>`
        );
        response.end();
    }
};


const getUsers = (request, response) => {
    const usersFile = path.join(__dirname, '../../../', '/src/db/users', '/all-users.json');
    const users = fs.readFileSync(usersFile);
    const allUsersJS = JSON.parse(users);

    if (allUsersJS.id == request.params.id) {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(JSON.stringify({ status: "success", user: allUsersJS }));
        response.end();
    } else {
        response.writeHead(400, { "Content-Type": "text/html" });
        response.write(JSON.stringify({ 'status': 'not found' }));
        response.end();
    }
};

module.exports = signUpRoute;
module.exports = getUsers;

