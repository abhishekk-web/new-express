const express = require("express");
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({extended: false}));

// app.use((req, res, next) =>{

//     console.log("In the middleware");
//     next();

// })

app.get("/add-product",(req, res, next) => {
    console.log("In another middleware");
    res.send("<form action='/product' method='POST'><input type='text' name='title'><input type='number' name='size'><button type='submit'>Add Product</form>")
})

app.post('/product', (req, res, next)=> {
    console.log(req.body);
    res.redirect("/about");
})

app.use("/about", (req, res, next) => {
    console.log("In the second middleware");
    res.send("<h1>Hello world again</h1>")
})


app.listen(3000);