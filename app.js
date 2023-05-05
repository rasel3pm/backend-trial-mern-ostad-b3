const express = require("express");
const router = require("./router/router");
const dotenv= require("dotenv")
const bodyParser = require("body-parser")
const multer = require("multer")
const mongoDB =require("./database/dbConnection")
require("colors");
dotenv.config();

//rest object
const app = express();

//middlewear
app.use(express.static("public"))
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);


const port = process.env.PORT || 8080;
//connect db
mongoDB()

//listen
app.listen(port, () => {
    console.log(`Server is runnig on port ${port}`.bgGreen.white);
});