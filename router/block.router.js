const express=require("express")
const { createBlock, getAllBlocks } = require("../controller/block.controller")

const blockRouter=express.Router()

blockRouter.post("/",createBlock)
blockRouter.get("/",getAllBlocks)

module.exports=blockRouter