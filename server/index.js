const express = require( "express");
const dotenv = require( 'dotenv')
dotenv.config();
const app = express();
const port = process.env.PORT;
const cors = require("cors");
app.use(express.json());
app.use(cors())

const userController = require("../server/controller/userController")
const connect = require("./config/connectDB")
const specialitiesController = require("../server/controller/specialitiesController")
const adminController = require("./controller/adminControleler")

connect();

app.use("/v1/api/users",userController)
app.use("/v1/api/admin",adminController)
app.use("/v1/api/specialities", specialitiesController)
app.listen(port, () => {
    console.log("Listening on port", port);
})