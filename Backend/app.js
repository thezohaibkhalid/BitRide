const express = require("express")
const app = express();
const dotenv = require("dotenv")
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3436765341.
const userRoutes = require("../routes/user.routes")
dotenv.config()
const cors = require("cors");



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.get("/", (req, res)=>{
    res.send("Hi I am Zohaib")
})

app.use("/users", userRoutes)


module.exports = app;
