const startServer = require('./src/server');
const { port } = require('./config');
const connectDB = require('./src/routes/connect-db');

startServer(port);
connectDB();
