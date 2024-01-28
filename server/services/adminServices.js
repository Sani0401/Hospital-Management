const Admin = require("../model/adminModel")
const Doctor = require("../model/doctorModel")
const User = require("../model/userModel")
async function adminLogin(data){
try{
    const email = data.email;
    const password = data.password;
    const user = await Admin.findOne({email});
   
    if( user && user.password == password){
        console.log("This is the authienticated user: ", user);
return user;
    }
    if( !user){return -1;}
    
}
catch(error){
console.error("Error getting user", error)
}
}

async function adminSignup (userData) {
try{
    const {email, password} = userData;
    console.log("This is the email request to create account from services: ", email);
    console.log("This is the password request to create account from services: ", password);
    const existingUser = await Admin.findOne({email:email})
    if( existingUser){
        return -1;
    }
    const user = await Admin.create({email: email, password: password, status: "Active"});
    return user;
}catch(error){
console.error("Error creating admin", error)
}
}

async function addDoctor(data) {
    console.log("This is the doctor data from the service: ", data.availability);
    const { name, contactNumber, specialization, availability, DoctorLoginID, DoctorPassword } = data;
    
    try {
        const searchDoctor = await Doctor.findOne({ loginId: DoctorLoginID });
       
        if (searchDoctor) {
            return -1;
        } else {
            const newDoctor = await Doctor.create({
                name: name,
                mobileNumber: contactNumber,
                specialization: specialization,
                availability: availability,
                loginId: DoctorLoginID,
                password: DoctorPassword
            });
            return newDoctor;
        }
    } catch (error) {
        console.error("Error adding doctor:", error);
        return -1;
    }
}

async function getDoctor () {
    try{
        const users = Doctor.find();
        if( users){
            return users;
        }
        else{
            return -1;
        }
        
    }
    catch(error){
        return -1;
    }
}

async function getPatients(){
try{
const users = await User.find();
    return users;
}
catch(error){
return -1;
}
}

async function deleteUsers(data){
try{
   await User.deleteOne({_id: data._id});
   return 1;
}
catch(error){
console.error("Error deleting user:", error);
return -1;
}
}

async function deleteDoctor(data){
try{
    console.log("This is the user requested to delete:", data._id);
    const user = await Doctor.deleteOne({_id: data._id})
    return 1;
}
catch(error){
    console.error("Error deleting doctor:", error);
    return -1;
}
}

module.exports = {adminLogin, adminSignup,addDoctor,getDoctor,getPatients,deleteUsers,deleteDoctor};