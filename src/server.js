const http = require('http');
// const https = require('https');
const routes = require('./routes');

const options = {
    // key: fs.readFileSync(''),
    // cert: fs.readFileSync('')
};

const startServer = (port) => {
    const server = http.createServer((req, res) => {

        if (req.url && req.url.includes('/products')) {
            const routing = routes['/products'];
            routing(req, res);
        } else if (req.url && req.url.includes('/signup')) {
            const routing = routes['/signup'];
            routing(req, res);
        } else {
            const routing = routes.default;
            routing(req, res);
        }

    })
    server.listen(port, () => {
        console.log('right!');
    })
};

module.exports = startServer;