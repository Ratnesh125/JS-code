const MyModel=require("../models/mymodel");
const express=require("express");
const router =express.Router();

router.get("/",(req,res)=>{
    res.render("home");
    var r=new MyModel(req.query);
    r.save();
})


module.exports=router;