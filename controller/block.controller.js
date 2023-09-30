const Block=require("../model/block.model")
const mongoose=require("mongoose")
const ObjectId = mongoose.Types.ObjectId; 
const createBlock=async(req,res)=>{
    try {

        if (!ObjectId.isValid(req.body.state) || !ObjectId.isValid(req.body.district)) {
            return res.status(400).json({
              success: false,
              message: 'Invalid ObjectId for state or district',
            });
          }

        const data=await Block.create(req.body)

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

const getAllBlocks=async(req,res)=>{
    try {
        const {district}=req.query

        let query={}

        if(district){
            query.district=district
        }
        const data=await Block.find(query).populate("state").populate("district")

       return res.status(200).json({
            success:true,
            message:data
        })
    } catch (error) {
        console.log(error)
    }
}
module.exports={
    createBlock,getAllBlocks
}