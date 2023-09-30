const Village=require("../model/village.model")
const mongoose=require("mongoose")
const ObjectId = mongoose.Types.ObjectId; 
const createVillage=async(req,res)=>{
    try {

        if (!req.body.village_name || !req.body.state || !req.body.district || !req.body.block) {
            return res.status(400).json({
              success: false,
              message: 'Missing required fields in the request body',
            });
          }
      
          // Check if the provided state, district, and block IDs are valid ObjectId strings
          if (!mongoose.Types.ObjectId.isValid(req.body.state) ||
              !mongoose.Types.ObjectId.isValid(req.body.district) ||
              !mongoose.Types.ObjectId.isValid(req.body.block)) {
            return res.status(400).json({
              success: false,
              message: 'Invalid ObjectId format for state, district, or block',
            });
          }

       const data=await Village.create(req.body) 
       if(!data){
        return res.status(500).json({
            success:false,
            message:""
        })
       }

      return res.status(201).json({
        success:true,
        message:data
    })
    } catch (error) {
        console.log(error)
    }
}

const getAllVillage=async(req,res)=>{
    try {
        const data=await Village.find().populate("state").populate("district").populate("block")

       return res.status(200).json({
            success:true,
            message:data
        })
    } catch (error) {
      console.log(error)  
    }
}
module.exports={
    createVillage,getAllVillage
}