const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const useSchema = new mongoose.Schema({
    fullName:{
        firstName:{
            type:String,
            required:true,
            minLen:[3, "Last name must be at least 3 characters long"]
        },
        lastName:{
            type:String, 
            minLen:[3, "Last name must be at least 3 characters long"]
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        // minLen:[6, "Email must be at least 6 characters long"]
    },
    password:{
        type:String, 
        required:true, 
        select:false
    },
    socketId:{
        type:String,
    }
})
userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id}, process.env.JWT_SECRET)
    return token
}
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}
module.exports = mongoose.model("User", userSchema)