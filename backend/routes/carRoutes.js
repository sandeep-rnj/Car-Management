const express = require('express');
const { createCar, getCars } = require('../controllers/carController');
const authenticate = require('../middleware/authenticate');
const router = express.Router();

router.post('/', authenticate, createCar);
router.get('/', authenticate, getCars);

module.exports = router;
