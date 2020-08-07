module.exports = app =>{
    const cv  = require("../controller/cv.controller.js")
    var express = require("express")

    var apps = express.Router()
    app.get('/cv-static',cv.staticFile)
    app.use("/",apps)
}