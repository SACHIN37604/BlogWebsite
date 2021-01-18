// jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const app = express();
app.set('view engine','ejs');
app.use(bodyParser,urlencoded({extended:true}));

app.get("/",function(req,res){
    res.render("home");
});

app.listen(3000,function(){
    console.log("server started at port 3000");
});