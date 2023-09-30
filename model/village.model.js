const mongoose=require("mongoose")

const villageSchema=new mongoose.Schema({
village_name:{
    type:String
},
state:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"State"
},
district:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"District"
},
block:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Block"
},
})

module.exports=mongoose.model("Village",villageSchema)