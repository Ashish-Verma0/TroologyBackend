const express=require("express")
const { createState, getAllState } = require("../controller/state.controller")

const stateRouter=express.Router()

stateRouter.post("/",createState)
stateRouter.get("/",getAllState)

module.exports=stateRouter