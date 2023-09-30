const mongoose=require("mongoose")

const blockSchema=new mongoose.Schema({
block_name:{
    type:String
},
state:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"State"
},
district:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"District"
}
})

module.exports=mongoose.model("Block",blockSchema)