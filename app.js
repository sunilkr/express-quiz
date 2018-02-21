var express = require("express");
const path = require("path")

app = express();

app.use(express.static("public"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", function(req, res){
    //res.sendFile(path.join(__dirname, "views", "index.html"));
    res.render("index.pug")
});

app.post("/start", function(req, res){
    res.render("iquiz", 
        {quiz:["Q1", "Q2", "Q3", "Q4"]}
    );
});
var server =    app.listen(3000, function(){
    console.log("Server started at port 3000");
});