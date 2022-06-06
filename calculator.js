const express = require("express");
// We are using body-parser library so that we can use variables and other information from html page. We are able to parse the body of the html page.
const bodyParser = require("body-parser"); 

const app = express();
// Whenever we want to use information that is being passed from html form then we are going to use urlencoded. extended: true allows us to post nested objects.
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    // We are using __dirname because for example when we deploy our code on cloud we might not be sure about the exact loaction of the file so now we are putting __dirname to get the exact file location and then appending the index.html file.
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("Result of your calculation is: " + result)
});

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator",function(req,res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight/(height*height);
    res.send("Your BMI is: " + bmi);
});

app.listen(3000,function(){
    console.log("Server has started at port 3000: get ready for some action");
});