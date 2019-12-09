const express = require('express');
const router = express.Router();
const getService = require('./get/service');
const updateService = require('./update/service');

router.get('/:id', getService);
router.put('/:id', updateService);

module.exports = router;