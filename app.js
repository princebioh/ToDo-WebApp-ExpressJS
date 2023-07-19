const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const getDay = require(__dirname + "/date.js");


app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});


let todos = ["Cook", "Eat", "Wash", "Run"]
let workList = []

const day = getDay();


// Home Directory
app.get("/", (req,res) => {
    res.render("index", {listTitle : day, tasks: todos, dirName: "home"});
});

app.post("/", (req,res) => {  
    userTask = req.body.task;
    todos.push(userTask); 
    res.redirect("/");  
})

// Work Directory
app.get("/work", (req,res) => {
    res.render('index', {listTitle: "Work", tasks: workList, dirName: "work"})
});

app.post("/work", (req,res) => {
    workTask = req.body.task;
    workList.push(workTask);
    res.redirect("/work");

})

