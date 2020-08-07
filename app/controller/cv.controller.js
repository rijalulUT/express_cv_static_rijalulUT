var express = require("express")
 var path = require("path")
 exports.staticFile = (req,res)=>{
    let reqPath = path.join(__dirname,'../')
    res.sendFile(reqPath+'/views/index.html')
}