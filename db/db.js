const mongoose=require("mongoose")
require("dotenv").config()
mongoose.connection.on("open",()=>{
    console.log("database connected")
})

mongoose.connection.on("end",()=>{
    console.log("database not connected")
})
console.log(process.env.url)
const startDatabase=async()=>{
    try {
       await mongoose.connect(process.env.url,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports=startDatabase