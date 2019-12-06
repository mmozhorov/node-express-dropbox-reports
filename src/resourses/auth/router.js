const express = require('express');
const router = express.Router();
const service = require('./service');

// routes
router.post('/', service);

module.exports = router;