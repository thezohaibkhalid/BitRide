const userModel = require("../models/user.model.js")

module.exports.createUser = async({firstname, lastname, email, password}) =>{
    if ( !firstname || !email || !password){
        throw new Error("All fields are required");
    }
    const user = await user.Model.create({
        fullname:{
            firstName:firstName,
            lastname:lastname
        },
        email, 
        password
    })
    return user;
}
