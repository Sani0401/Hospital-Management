const express = require("express");
const router = express.Router();
const getSpecialities = require('../services/specialitiesServices')


router.get("/getSpecialities", async (req,res) =>{
    try{
    const data = await getSpecialities();
    console.log("This is the specialities data from teh specialitites controller:", data);
    if( data === -1){
       return  res.status(200).json({message:"NO specialitites found!"})
    }
    if( data != -1){
    return res.status(200).json({data:data})
    }
   

    }
    catch(error){
        console.error("Error getting the specialities: ", error)
    }

})


module.exports = router;