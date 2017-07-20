var path = require('path');
var fs = require('fs');
var express = require('express');

// Server part
var app = express();
app.use('/', express.static(path.join(__dirname, 'public')));

var server = app.listen(80);
console.log('Server listening on port 80');

// Socket.IO part
var io = require('socket.io')(server);

io.on('connection', function (socket) {
  console.log('New client connected!');
  io.sockets.emit('broadcast', {msg: 'broadcast_all'});
  socket.emit('connectedPerson', {id: socket.id});
});