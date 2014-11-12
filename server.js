var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/*==========  Express Stuff  ==========*/
app.get('/', express.static('public'));

/*==========  io Stuff  ==========*/
io.on('connection', function(socket) {
	console.log('\nconnected :D');

	/*==========  Adding Events (At Run Time)  ==========*/
	socket.on('new_socket_event', function(event_name, func) {
		//For Debugging purposes
		var test = function(thing) {
			return function() {
				console.log('\nI am running the thing.\n')
				console.log(thing);
			};
		};
		socket.on(event_name, test(func));
	});
		
});

http.listen(3000, function() {
	console.log('Listening on :3000');
});