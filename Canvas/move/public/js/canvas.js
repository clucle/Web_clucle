// Canvas Setting
var canvas = document.getElementById('Canvas');
var context = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;

// Player Setting
var player = new Player(100, 100);

var imgPlayer = new Image();
imgPlayer.src = "public/resource/player.png";

function Render() {
		context.fillStyle='#ffffff';
		context.fillRect(0, 0, width, height);

		player.UpdatePlayer();
		
		context.drawImage(imgPlayer, player.motion * 24, player.dir * 32, 24, 32,
						player.xPos, player.yPos, 48, 64);
		setTimeout(Render, 40);
}

Render();
