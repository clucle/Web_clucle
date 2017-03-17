var g_save;

jQuery(function($){
	var socket = io.connect();
	var $openForm = $('#setOpen');
	var $closeForm = $('#setClose');
	var $openBox = $('#name_open');
	var $closeBox = $('#name_close');
	var $record = $('#record')
	var $isopen = $('#open')

	$openForm.submit(function(e){
		e.preventDefault();
		socket.emit('open', $openBox.val(), function(data){
		});
		$openBox.val('');
	});

	$closeForm.submit(function(e){
		e.preventDefault();
		socket.emit('close', $closeBox.val(), function(data){
		});
		$closeBox.val('');
	});

	socket.on('usernames', function(data){
		var html = '';
		for(var i=0; i< data.length; i++){
			html += data[i] + '<br/>'
		}
		$users.html(html);
	});


	socket.on('load records', function(docs){
		g_save = docs;
		displayAll();
	});

	function displayAll(){
		for(var i=0; i < g_save.length; i++){
			displayMsg(g_save[i]);
		}
		if (g_save.length > 0){
			if (g_save[0].msg === 'open') displayOpen(true);
			else displayOpen(false)
		}

	}
	function displayMsg(data){
		var kr_time = changeTime(data.created);
		$record.append('<span class="msg"><b>' + 
			data.name + '님 </b>' + 
			data.msg + '  ' +
			kr_time + '</span><br/>');
	}

	function displayOpen(isOpen){
		$isopen.html('');
		if (isOpen) {
			$isopen.append('<h2>YES</h2>');
			$closeForm.show();
			$openForm.hide();

		} else {
			$isopen.append('<h2>NO</h2>');
			$closeForm.hide();
			$openForm.show();
		}
	}

	function changeTime(data){
		var year = Number(data.substring(0,4));
		var month = Number(data.substring(5,7));
		var day = Number(data.substring(8,10));
		var hour = Number(data.substring(11,13)) + 9;
		var minute = Number(data.substring(14,16));

		if (hour > 23) {
			hour -= 24;
			day++;
		}

		return month + '-' + day + ' / ' + hour + ':' + minute;
	}


	socket.on('change', function(data){
		if (g_save.length > 1) g_save[2] = g_save[1];
		if (g_save.length > 0) g_save[1] = g_save[0];
		g_save[0] = data;
		$record.html('');
		displayAll(g_save);
	});

});