const express = require('express');
const router = express.Router();
const service = require('./service');

router.get('/:id', service);
module.exports = router;