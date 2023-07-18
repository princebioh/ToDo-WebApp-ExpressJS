const express = require("express");
const app = express();
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});

let todos = ["Cook", "Eat", "Wash", "Run"]
const today = new Date();
let options = {
    day: "numeric",
    weekday: "long",
    month: "long"
};

day = today.toLocaleDateString("en-US", options);


app.get("/", (req,res) => {
    res.render("index", {dayOfWeek : day, tasks: todos});
});


app.post("/", (req,res) => {
    userTask = req.body.task;
    todos.push(userTask);
    res.render("index", {dayOfWeek : day, tasks: todos});
})


