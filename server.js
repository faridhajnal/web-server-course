var express = require('express');

var app = express();
var port = 3000;


var middleware = require('./middleware.js')



app.use(middleware.logger); //important to specify it here   

/*app.get('/', function(req,res){
    
    res.send('Hello Express');
    
});*/

app.get('/route', middleware.requireAuthentication, function(req,res){
    
    res.send('Hello Express from route!!:D');
    
});


app.use(express.static(__dirname + '/public'));

console.log(__dirname); //provided by node; index.html is default is non is specified on route (/)


app.listen(port, function(){
    
    console.log('running on port ' + port);

    
});