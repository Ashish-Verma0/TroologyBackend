const mongoose=require("mongoose")

const stateSchema=new mongoose.Schema({
state_name:{
    type:String
}
})

module.exports=mongoose.model("State",stateSchema)