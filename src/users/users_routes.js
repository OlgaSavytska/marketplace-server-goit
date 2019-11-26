const { Router } = require('express');
const { sendAllUsers, sendUser, createUser } = require('./controllers');

const router = Router();

router.get('/', sendAllUsers);
router.get('/:id', sendUser);
router.post('/', createUser);

module.exports = router;