const mongoose = require("mongoose");

const specialitiesSchema = new mongoose.Schema({
   
    imageUrl :{type:String, required: true},
    title: {type: String, reuired:true},
    description:{type:String, required:true}

})

const Speciality = mongoose.model("Speciality",specialitiesSchema);

module.exports = Speciality;