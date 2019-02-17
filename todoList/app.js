// jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
var items = ["Buy Food","Cook Food","Eat Food"];
let workItems = [];
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  var today = new Date();
  var day = today.getDay();
  var options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };

  var dayString = today.toLocaleDateString("en-US", options);
  res.render('index', {DAY: dayString,listItems:items});
});

app.post('/', function(req,res){
  var item = req.body.newItem;
  let buttonClicked = req.body.button;
  console.log(buttonClicked);
  if (buttonClicked === "WORK"){
    workItems.push(item);
    res.redirect('/work');
  }
  else{
  items.push(item);
  res.redirect("/");
  }
});

app.get('/work', function(req, res){
  res.render('index', {DAY: "WORK LIST", listItems:workItems});
});

app.get('/about', function(req, res){
  res.render('about');
});

app.listen(3000, function(){
  console.log("Server running on port 3000");
});
