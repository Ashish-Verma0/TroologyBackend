const express=require("express")
const { createVillage, getAllVillage } = require("../controller/village.controller")

const villageRouter=express.Router()

villageRouter.post("/",createVillage)
villageRouter.get("/",getAllVillage)

module.exports=villageRouter