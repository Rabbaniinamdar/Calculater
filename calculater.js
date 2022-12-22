var express = require("express")
const body_parser = require("body-parser")
const app = express()
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.use(body_parser.urlencoded({  extended: true }))
app.post('/', (req, res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("Result is " + result)
});
app.get('/BMI', (req, res) => {
    res.sendFile(__dirname + "/BMICalculater.html");
});
app.post('/BMICalculater', (req, res) => {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var BMICalculater = weight / (height*height);
    console.log(BMICalculater)
    res.send("Result is " +BMICalculater )
});
app.listen(3000, () => {
    console.log("Server is Running on Port 3000")
});