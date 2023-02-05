const path = require('path');
const rootDir = require('../utils/path');

exports.getAddProduct = (req, res, next) => {
    console.log("In another middleware");
    res.sendFile(path.join(rootDir, "views", "add-product.html"));
}

exports.postAddProduct = (req, res, next)=> {
    console.log(req.body);
    res.redirect("/shop");
}

exports.getProducts =  (req, res, next) => {
    console.log("In the second middleware");
    res.sendFile(path.join(rootDir,'views', 'shop.html'));
}