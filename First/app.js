// console.log("Shailesh learning backend from chai aur code");

const express = require("express");
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("Hello Shailesh");
})
app.get("/about",(req,res)=>{
    res.send("<h1>Hello I am Shailesh and I am learning backend from chai aur code</h1>");
})
app.get("/contact",(req,res)=>{
    res.send("contact me at 6386685600");
})
app.get("/hobbies",(req,res)=>{
    res.send("My hobbies are playing cricket and listening to music");
})

app.listen(port,(req,res)=>{
    console.log(`Server is running on port ${port}`)
})