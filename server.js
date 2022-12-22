var express = require("express")
const app = express();
app.get('/',(req,res)=>{
    res.send("<h1>Home Mahammad Rabbani</h1>")
})
app.get("/contact",(req,res)=>{
    res.send("<h1>Contact Mahammad Rabbani rabbani</h1>")
})
app.get("/about",(req,res)=>{
    res.send("<h1>Mahammad Rabbani</h1>")
})
app.get("/Services",(req,res)=>{
    res.send("<h1>Services Mahammad Rabbani inamdar</h1>")
})
app.get("/hobbies",(req,res)=>{
    res.send("<h1>hobbies Mahammad Rabbani </h1>")
})
app.listen(3000, () => {
    console.log("server started on port 3000")
})