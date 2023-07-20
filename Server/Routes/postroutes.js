const express = require("express");
const router = express.Router();
const users = require("../models/Post");

router.get("/add/getdata",async(req,res)=>{
    try {
        const userdata = await users.find();
        res.status(201).json(userdata)
        console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
    }
})

module.exports = router;

