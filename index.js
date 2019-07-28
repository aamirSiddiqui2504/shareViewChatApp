var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config/database');
var path = require('path');


//mongoose.Promise=global.Promise;
mongoose.connect(config.uri, (err) =>{
    if(err){
    console.log("Cound not run Database");
    }
    else{
        console.log("connected to : " + config.secret);
        console.log("connected to : " + config.db);
    }
    }
)

app.use(express.static(__dirname + '/client/dist/client/'));

app.get('/', function(req,res){
    console.log("path " + path);
    res.sendFile(path.join(__dirname + 'index.html ')); // we can write below line of code as well.
    //res.sendFile(path.join(__dirname + '/client/dist/client/index.html '));
})

app.listen(9090, () => {
    console.log("listening on port 9090");
    
})