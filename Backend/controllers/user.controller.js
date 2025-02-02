const userModel = require("../models/user.model.js");
const userService = require("../services/user.service")
const {validationResult} = "express-validator"
module.exports.registerUser = async (req, res) =>{
    const errors = validationResult(req);   
    if (!errors.isEmpty){
        return res.send(400).json({errors: error.array})
    }

    const {firstname, lastname, email, password} = req.body;

    const hashPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname,
        lastname,
        email,
        password:hashPassword,
    })

    const token = userModel.generateAuthToken( )
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1459613311.
    res.send({user, token})
}
