
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/bmiCalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});


app.post("/bmiCalculator", function(req, res){

  var weight = parseFloat(req.body.weight);
  console.log(weight);
  var height = parseFloat(req.body.height);
  console.log(height);

  var result = Math.round(weight / (height * height));
  console.log(result)

  res.send("Your BMI is: " + result);
});


app.listen(3000, function(){
  console.log("Server started on port 3000");
});
