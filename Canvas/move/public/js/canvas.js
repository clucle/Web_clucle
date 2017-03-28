var canvas = document.getElementById('Canvas');
var context = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;

function Render() {
	context.fillStyle='#ffffff';
	context.fillRect(0, 0, width, height);
}

Render();
