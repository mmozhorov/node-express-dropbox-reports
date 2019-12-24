const express = require('express');
const router = express.Router();
const getUserValidator = require('../../common/validation/users/get/validator');
const updateUserValidator = require('../../common/validation/users/update/validator');
const getService = require('./get/service');
const updateService = require('./update/service');

router.get('/:id', getUserValidator, getService);
router.put('/:id', updateUserValidator, updateService);

module.exports = router;