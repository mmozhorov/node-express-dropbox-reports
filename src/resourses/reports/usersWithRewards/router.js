const express = require('express');
const router = express.Router();
const reportsValidator = require('../../../common/validation/reports/validatior');
const service = require('./service');

router.get('/', reportsValidator, service);
module.exports = router;