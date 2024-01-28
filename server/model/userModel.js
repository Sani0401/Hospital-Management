const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname: {type: String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true},
    mobileNumber:{type:String, required:true},
    password: {type:String, required:true},
    location:{type:String, required:true},
    lastVisit : {type:Date, required: true},
})

const User = mongoose.model("User",userSchema);

module.exports = User;