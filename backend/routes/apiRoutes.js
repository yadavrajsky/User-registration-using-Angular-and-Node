const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
// Mount the userRoutes under /users
router.use('/user', userRoutes);

module.exports = router;
