const State=require("../model/state.model")

const createState=async(req,res)=>{
try {

    if (!req.body.state_name) {
        return res.status(400).json({
          success: false,
          message: "State name is required",
        });
      }
  
    const data=await State.create(req.body)

    if(!data){
      return  res.status(500).json({
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

const getAllState=async(req,res)=>{
    try {
       const data=await State.find({})

      return res.status(200).json({
        success:true,
        message:data
       })
    } catch (error) {
      console.log(error)
    }
}
module.exports={
    createState,
    getAllState
}