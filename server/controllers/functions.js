const mongoose=require("mongoose")
const {userScheema}=require("../model/user");
const Fetchdetails=async(req,res)=>{
    const details=await userScheema.find();
    console.log("details=====",details)
}

const isLoggedin=async(req,res)=>{
    return true;
}
module.exports={Fetchdetails,isLoggedin};