const { Router } = require('express');
const { createOrder } = require('./controllers');

const router = Router();

router.post('/', createOrder);

module.exports = router;