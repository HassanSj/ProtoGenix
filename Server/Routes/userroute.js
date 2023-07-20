const express = require("express");
const routers = express.Router();
const users = require("../models/Post");

routers.get("/profile/getusers",async(req,res)=>{
    try {
        const userdata = await users.find();
        res.status(201).json(userdata)
        console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
    }
})

// get individual user

// router.get("/add/getuser/:id",async(req,res)=>{
//     try {
//         console.log(req.params);
//         const {id} = req.params;

//         const userindividual = await users.findById({_id:id});
//         console.log(userindividual);
//         res.status(201).json(userindividual)

//     } catch (error) {
//         res.status(422).json(error);
//     }
// })



module.exports = routers;