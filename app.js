const express=require("express")
const stateRouter = require("./router/state.router")
const districtRouter = require("./router/district.router")
const blockRouter = require("./router/block.router")
const villageRouter = require("./router/village.router")

const app=express()

app.use(express.json())

// routes
app.use("/api/states",stateRouter)
app.use("/api/districts",districtRouter)
app.use("/api/blocks",blockRouter)
app.use("/api/villages",villageRouter)
app.get("/",(req,res)=>{
    res.send("hello world")
})

module.exports=app
