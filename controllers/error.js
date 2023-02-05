const path = require('path');
const rootDir = require('../utils/path');

exports.error = (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "notFound.html"));
}