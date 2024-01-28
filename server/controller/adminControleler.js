const express = require("express");
const {adminLogin,adminSignup,addDoctor, getDoctor,getPatients,deleteUsers,deleteDoctor} = require("../services/adminServices")
const router = express.Router();


// In your adminRoutes.js or wherever you handle the login route
router.post("/login", async (req, res) => {
    const data = req.body;
    const response = await adminLogin(data);
    console.log("This is the response: ", response);
    
    if (response === -1) {
        return res.status(400).json({ message: "User not found" });
    }

    if (!response) {
        return res.status(401).json({ message: "Incorrect email or password" });
    }

    return res.status(200).json({ user: response });
});

router.post("/signup", async (req, res) => {
    const data = req.body;
    const response = await adminSignup(data);
    console.log("This is the response: ", response);
    
    if (response === -1) {
        return res.status(400).json({ message: "User already created" });
    }

    if (!response) {
        return res.status(401).json({ message: "Incorrect email or password" });
    }

    return res.status(200).json({ user: response });
});

router.post("/addDoctor", async (req, res) => {
    const data = req.body;
    const response = await addDoctor(data);
    if( response == -1){
       return  res.status(200).json({message: "User Already created"})
    }
    else{
        res.status(200).json({message:"Added doctor", user : response})
    }
    
});

router.get("/getDoctor", async (req, res) => {
    const data = req.body;
    const response = await getDoctor();
    if( response == -1){
        return res.status(400).json({message:"No Doctors found"})
    }
    else{
        return res.status(200).json({doctors:response})
    }
    
});

router.get("/getPatients", async (req, res) => {
    const data = req.body;
    const response = await getPatients();
    console.log("This is the response from the server for users:", response);
    if( response == -1){
        return res.status(400).json({message:"No Patients found"})
    }
    else{
        return res.status(200).json({patients:response})
    }
    
});

router.post("/deleteUsers", async (req, res) => {
    const data = req.body;
    const response = await deleteUsers(data);
    console.log("This is the response from the server for users:", response);
    if( response == -1){
        return res.status(400).json({message:"No Patients found"})
    }
    else{
        return res.status(200).json({patients:response})
    }
    
});

router.post("/deleteDoctor", async (req, res) => {
    const data = req.body;
    const response = await deleteDoctor(data);
    console.log("This is the response from the server for users:", response);
    if( response == -1){
        return res.status(400).json({message:"No Patients found"})
    }
    else{
        return res.status(200).json({patients:response})
    }
    
});


module.exports = router;
