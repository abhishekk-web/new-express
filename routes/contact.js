const express = require('express');
const path = require('path');

const rootDir = require('../utils/path');

const contactController = require('../controllers/contact');

const router = express.Router();

router.get("/contact", contactController.getContact);

router.post('/success', contactController.postContact);


module.exports = router;