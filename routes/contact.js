const express = require('express');
const path = require('path');

const rootDir = require('../utils/path');

const router = express.Router();

router.get("/contact", (req, res, next)=> {

    res.sendFile(path.join(rootDir, "views", "contact.html"))

})

router.post('/success',(req, res, next)=> {
    console.log(req.body);
    res.redirect("/shop");
});


module.exports = router;