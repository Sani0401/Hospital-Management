const express = require("express");
const mongoose = require( "mongoose");

const Speciality = require("../model/specialities");



async function getSpecialities (){
    try{
        const data = await Speciality.find();
        console.log("This is the specialities data from teh specialitites services:", data);
        if( data.length === 0){
            return -1;
        }
        else{
            return data;
        }
        
    }
    catch(error){
        console.error("Error getting specialities",error);
       return -1;
    }
}

module.exports = getSpecialities;