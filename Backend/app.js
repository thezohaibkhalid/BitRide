const express = require("express")
const app = express();
const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors");
app.use(cors())
app.get("/", (req, res)=>{
    res.send("Hi I am Zohaib")
})

module.exports = app;