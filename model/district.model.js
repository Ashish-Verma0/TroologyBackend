const mongoose=require("mongoose")

const districtSchema=new mongoose.Schema({
district_name:{
    type:String
},
state:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"State"
}
})

module.exports=mongoose.model("District",districtSchema)