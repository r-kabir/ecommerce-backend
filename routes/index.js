const express = require("express")
const _ = express.Router()
const api = process.env.BASE_URL
const apiRoutes = require("./api")

_.use(api,apiRoutes)
_.use(api, (req,res)=>res.json("Nothing Here"))
module.exports = _;