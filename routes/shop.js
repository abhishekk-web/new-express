const express = require('express');
const path = require('path');

const rootDir = require('../utils/path');

const shopController = require('../controllers/product');

const router = express.Router();

router.get("/", shopController.getProducts);



module.exports = router;