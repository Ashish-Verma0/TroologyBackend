const District=require("../model/district.model")
const mongoose=require("mongoose")
const ObjectId = mongoose.Types.ObjectId; 
const createDistrict=async(req,res)=>{
    try {

        if (!req.body.district_name || typeof req.body.district_name !== 'string' || req.body.district_name.trim() === '') {
            return res.status(400).json({
              success: false,
              message: 'Invalid or missing district_name',
            });
          }
      
          // Check if the 'state' field is provided and is a valid ObjectId
          if (!mongoose.Types.ObjectId.isValid(req.body.state)) {
            return res.status(400).json({
              success: false,
              message: 'Invalid or missing state ObjectId',
            });
          }

       const data=await District.create(req.body) 

       if(!data){
        return res.stauts(500).json({
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

const getAllDistrict=async(req,res)=>{
    try {
        const{state}=req.query
        let query={}

        if(state){
            query.state=state
        }

        const data=await District.find(query).populate("state")
        return res.status(200).json({
            success:false,
            message:data
        })
    } catch (error) {
     console.log(error)
    }
}
module.exports={
    createDistrict,getAllDistrict
}