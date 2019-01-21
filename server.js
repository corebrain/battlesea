const express = require('express');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

env = process.env.NODE_ENV || 'development',
port = process.argv[2] || process.env.PORT || 8000,
address = '0.0.0.0';

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/game', function(req,res){
    res.sendFile(__dirname + '/game.html');
});

// Static files
app.use(express.static(__dirname + '/public'));

http.listen(8000, function(){
  console.log('listening on *:8000');
});
