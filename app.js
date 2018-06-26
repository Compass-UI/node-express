var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('app'); // spit out console.log messages only when in debug mode
var morgan = require('morgan');

var app = express();

// app.use(morgan('combined'));
app.use(morgan('tiny'));

app.get('/', function(req, res){
    // res.send('Hello from express');
    // res.send('./index.html');
    // res.sendFile('./index.html'); // Error: TypeError: path must be absolute or specify root to res.sendFile
    res.sendFile(__dirname + '/index.html');

})

app.listen(3000, function(){
    console.log(`listening on port ${chalk.green(3000)}` );
});