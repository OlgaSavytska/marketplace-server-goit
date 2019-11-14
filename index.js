const startServer = require('./src/server');
const {
    port
} = require('./src/config/port');

startServer(port);