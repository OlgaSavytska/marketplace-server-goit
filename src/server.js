const http = require('http');
const url = require('url');
const fs = require('fs');
const morgan = require('morgan');
const router = require('./routes/router');

const logger = morgan('combined');


const startServer = port => {

  const server = http.createServer((request, response) => {
      //let pathName;
    // Get route from the request
    const parsedUrl = url.parse(request.url);

      console.log(parsedUrl);
    const func = router[parsedUrl.pathname] || router.default;

    logger(request, response, () => func(request, response));
  });

  server.listen(port);
};

module.exports = startServer;
