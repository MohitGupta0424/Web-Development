// jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const  app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function(){
  console.log("listening to server at port 3000");
});

app.get('/', function(req , res){
  res.sendFile(__dirname+"/index.html");
});

app.post('/', function(req, res){
  var bit = req.body.bit;
  var currency = req.body.currency;
  var target = bit+currency;
  request("https://apiv2.bitcoinaverage.com/indices/global/ticker/"+target, function(error, response, body){
    var result = JSON.parse(body);
    var price = result.averages.week;
    res.send("<h1>The price of "+bit+" is: "+price+" "+currency+" </h1>");
  });
});
