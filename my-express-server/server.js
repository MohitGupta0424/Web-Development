// jshint esversion:6

const express = require('express');

const app = express();

app.get('/', function(req, res){
  res.send("Chal be!!");
});

app.get('/contact', function(req, res){
  res.send("Contact me at mohit@gmail.com");
});

app.get('/about', function(req, res){
  res.send("I am a student at University of Waterloo.");
});

app.listen(3000,function(){
  console.log("Starting server at port 3000");
});

app.get('/hobbies', function(req, res){
  res.send("bhut saari hai kya btaye!!!");
});
