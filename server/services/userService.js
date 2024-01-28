const express = require("express");
const mongoose = require("mongoose");
const User = require("../model/userModel")

async function login (data) {
    const {email, password} = data;
try{
    const userDetail = await User.findOne({email: email , password: password});
    console.log("This is the suerDetails from services:", userDetail);
    return userDetail;
}catch(error){
console.error("Error", error)
}

}


async function signup(data){
const {firstName,lastName,email,contactNumber,password,location} = data;
const lastVisit = Date.now().Date;
try{
    const user = await User.create({firstname : firstName,email : email, lastName : lastName, mobileNumber : contactNumber, password : password, location: location, lastVisit: lastVisit})
    console.log(user);
    return user
}catch(error){
console.error("Error creating a user:", error)
}
}


module.exports = {login,signup};