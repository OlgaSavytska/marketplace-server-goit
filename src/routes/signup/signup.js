const fs = require("fs");
const path = require("path");

const signup = (req, res) => {
    if (req.method === "POST") {
        let body = '';
        req.on('data', function (data) {
                body = body + data;
            })
            .on('end', function () {
                const user = JSON.parse(body);
                const filename = JSON.parse(body).username;
                const pathToUserFile = path.join(__dirname, "..", "..", "db", "users", `${filename}.json`);
                if (fs.existsSync(pathToUserFile)) {
                    res.end("User with such name already exists")
                } else {
                    const result = {
                        status: "success",
                        user
                    };


                    fs.appendFile(
                        pathToUserFile,
                        body,
                        function (error) {
                            if (error) {
                                console.log(error);
                            }
                        }
                    );

                    res.writeHead(200, {
                        'Content-Type': 'application/json'
                    });
                    res.write(JSON.stringify(result));
                    res.end();
                }

            })
    } else {
        res.end();
    }


}

module.exports = signup;