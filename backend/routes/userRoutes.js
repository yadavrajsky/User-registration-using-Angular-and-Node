const express = require('express');
const { register ,getAllUsers} = require('../controllers/userController');

const router = express.Router();

router.post('/register', register);
router.get('/fetch', getAllUsers);

module.exports = router;
