const express = require('express');
const mainRoute = require('./main');

const apiRoutes = express.Router();

apiRoutes.get("/", mainRoute);

module.exports = apiRouter;