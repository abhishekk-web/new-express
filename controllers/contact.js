const path = require('path');
const rootDir = require('../utils/path');

exports.getContact =  (req, res, next)=> {

    res.sendFile(path.join(rootDir, "views", "contact.html"))

}

exports.postContact = (req, res, next)=> {
    console.log(req.body);
    res.redirect("/shop");
}