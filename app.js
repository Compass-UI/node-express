var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('app'); // spit out console.log messages only when in debug mode
var morgan = require('morgan');
var path = require('path');

var app = express();

// app.use(morgan('combined'));
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css/', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css/')));
app.use('/js/', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js/', express.static(path.join(__dirname, '/node_modules/jquery/dist/')));

app.get('/', function(req, res){
    // res.send('Hello from express');  
    // res.send('./index.html');
    // res.sendFile('./index.html'); // Error: TypeError: path must be absolute or specify root to res.sendFile
    // res.sendFile(__dirname + '/index.html'); // On Windows you will have problems
    res.sendFile(path.join(__dirname, 'index.html')); 

})

app.listen(3000, function(){
    console.log(`listening on port ${chalk.green(3000)}` );
});