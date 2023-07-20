const express = require("express");
const app = express()
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const Post = require("./models/Post");
const router = require("./Routes/postroutes");
const routers = require("./Routes/userroute");
var insertion = express.Router();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://0.0.0.0:27017/protogenix");

app.post("/api/add/user", async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
  }
});
app.use(router);
app.use(routers);
app.listen(1337, () => {
  console.log("Server started on 1337");
});
