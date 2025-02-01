const userModel = require("../models/user.model.js");
const userService = require("../services/user.service")
const {validationResult} = "express-validator"
module.exports.registerUser = async (req, res) =>{
    const errors = validationResult(req);   
    if (!errors.isEmpty){
        return res.send(400).json({errors: error.array})
    }
}
