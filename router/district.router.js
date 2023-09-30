const express=require("express")
const { createDistrict, getAllDistrict } = require("../controller/district.controller")

const districtRouter=express.Router()

districtRouter.post("/",createDistrict)
districtRouter.get("/",getAllDistrict)

module.exports=districtRouter