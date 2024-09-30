const express = require('express');
const router = express.Router();
const { calculatorApiHandler } = require('../../controllers/v1/calculatorController');


router.post('/', calculatorApiHandler);

module.exports = router;