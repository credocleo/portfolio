var http = require('http');
var express = require('express');
var path = require('path');
var app = express();
var PORT = 9080;

app.use(express.static(path.join(__dirname, 'public'))); 

app.get('/', function(request,response){
	response.render('index.html');
});

app.get('/name' function(request,response){
	let message = {"name": "Cleo"}
	response.send(JSON.stringify(message));
});

app.listen(PORT, function(){
	console.log('Server listening on' + PORT);
});
