
jQuery(function($){
	var socket = io.connect();
	var $openForm = $('#setOpen');
	var $closeForm = $('#setClose');
	var $openBox = $('#name_open');
	var $closeBox = $('#name_close');


	$openForm.submit(function(e){
		e.preventDefault();
		socket.emit('open', $openBox.val(), function(data){
			if(data){
				console.log("A");
			}
		});
		$nickBox.val('');
	});

	$openForm.submit(function(e){
		e.preventDefault();
		socket.emit('close', $openBox.val(), function(data){
			if(data){
				console.log("B");
			}
		});
		$nickBox.val('');
	});

	socket.on('usernames', function(data){
		var html = '';
		for(var i=0; i< data.length; i++){
			html += data[i] + '<br/>'
		}
		$users.html(html);
	});


	socket.on('load old msgs', function(docs){
		for(var i=docs.length-1; i >=0; i--){
			displayMsg(docs[i]);
		}
	});

	socket.on('load records', function(data){
		displayMsg(data);
	});

	function displayMsg(data){
		$chat.append('<span class="msg"><b>' + data.nick + ': </b>' + data.msg + "</span><br/>");
	}
});