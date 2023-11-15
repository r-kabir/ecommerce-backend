require('dotenv').config()
const express = require('express')
const app = express()
const dbConnection = require("./config/dbConfig")


app.use(express.json());
dbConnection()

app.listen(3000, function(){console.log("server running");})