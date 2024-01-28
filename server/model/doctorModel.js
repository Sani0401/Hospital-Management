const mongoose = require('mongoose')


const doctorSchema = new mongoose.Schema({
    name:{type:String, required:true},
    mobileNumber:{type:Number, required:true},
    specialization:{type:String,required:true},
    availability: { type: [String], required: true },
    loginId:{type:String, required:true},
    password:{type:String, required:true},
    image: {
       type:String
    } 
})

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;