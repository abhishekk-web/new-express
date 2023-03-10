const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require('./utils/path');


const app = express();
app.use(bodyParser.urlencoded({extended: false}));

// app.use((req, res, next) =>{

//     console.log("In the middleware");
//     next();

// })

const errorController = require('./controllers/error');

app.use(express.static(path.join(__dirname,"public","css")))

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact');

app.use("/admin",adminRoutes);

app.use("/shop",shopRoutes);

app.use( contactRoutes);

app.use(errorController.error);

app.listen(3000);