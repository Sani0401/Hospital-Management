const express = require( "express");
const router = express.Router();
const {login, signup} = require("../services/userService")
const generateToken = require('../constant/creatToken')


router.post("/login", async(req,res) => {
    const {email, password} = req.body;
    const data = {email: email, password: password}
  try{
    console.log("This is the login data from the controller", data);
    const response = await login(data);
    console.log("This is the response in controller for login", response);
   if( !response){
    
    console.log("No users found");
    res.status(200).json({message:"user not found", user: -1})}
    else{
      res.status(200).json({user: response})
    }
    
  }catch(error){
console.error("error loggin in", error)
  }})

  router.post("/signup", async(req,res) => {
const data = req.body;
console.log("request recieved");
  try{
    console.log("This is the login data from the controller", data);
    const response = await signup(data); 
    console.log("THis is response", response);   
    const token = generateToken(data)
    res.status(200).json({message:"created User", userToken: token, user: response})
   
    
  }catch(error){
console.error("error loggin in", error)
  }
    
})


module.exports = router;