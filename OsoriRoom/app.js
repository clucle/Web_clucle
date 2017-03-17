var express = require('express');
var	app = express();
var	server = require('http').createServer(app);
var	io = require('socket.io').listen(server);
var	mongoose = require('mongoose');
var	users = {};

/* server on localhost:3000 */
server.listen(3000);

/* routing */
app.use('/source', express.static('source'));
app.use('/public', express.static('public'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

/* mongo connection */
mongoose.connect('mongodb://localhost/osori', function(err){
	if(err){
		console.log(err);
	} else{
		console.log('Connected to mongodb');
	}
});

/* Set Schema */
var roomSchema = mongoose.Schema({
	name: String,
	msg: String,
	created: {type: Date, default: Date.now}
});
var Room = mongoose.model('Message', roomSchema);


/* Connection */
io.sockets.on('connection', function(socket){
	var query = Room.find({});
	query.sort('-created').limit(3).exec(function(err, docs){
		if(err) throw err;
		socket.emit('load records', docs);
	});

	socket.on('open', function(data, callback){
		var newMsg = new Room({msg: 'open', name: data});
		newMsg.save(function(err){
			if(err) throw err;
			io.sockets.emit('change', {msg: newMsg.msg,
				name: newMsg.name, created: newMsg.created});
		});
	});

	socket.on('close', function(data, callback){
		var newMsg = new Room({msg: 'close', name: data});
		newMsg.save(function(err){
			if(err) throw err;
			io.sockets.emit('change', {msg: newMsg.msg,
				name: newMsg.name, created: newMsg.created});
		});
	});

});