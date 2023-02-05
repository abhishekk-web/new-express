const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');

const productControllers = require('../controllers/product');

const router = express.Router();

router.get('/add-product', productControllers.getAddProduct);

router.post('/product', productControllers.postAddProduct);

module.exports = router;
