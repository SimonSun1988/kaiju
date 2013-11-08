var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;

global.util = {
  flow: require('flow')
}
MongoClient.connect('mongodb://127.0.0.1:27017/kaiju', function(err, db){
  if(err){
    throw err;
  }
  global.db = db;
})

var kaiju = require('./routes/kaiju');

app.all('/', kaiju.main);
app.all('/showMongo', kaiju.showMongo);

util.flow.exec(
  function(){
    app.listen(3000);
    this();
  },
  
  function(){
    console.dir("Start listen 3000 port");
  }
)

