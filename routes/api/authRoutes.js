const express = require("express")
const _ = express.Router()


_.get("/registration", function(req,res){res.send("registration done")})

module.exports = _;