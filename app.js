var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('app');

var app = express();

app.get('/', function(req, res){
    // res.send('Hello from express');
    res.send('./index.html');
})

app.listen(3000, function(){
    console.log(`listening on port ${chalk.green(3000)}` );
});