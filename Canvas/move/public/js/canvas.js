// Canvas Setting
var canvas = document.getElementById('Canvas');
var context = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;

// Player Setting
var player = Player(100, 100);

var imgPlayer = new Image();
imgPlayer.src = "public/resource/player.png";

function Render() {
	context.fillStyle='#ffffff';
	context.fillRect(0, 0, width, height);

}

function RenderCharacter() {
	context.drawImage(imgPlayer, 0, 0, 24, 32, 0, 0, 48, 64);
	setTimeout(RenderCharacter,40);
}

RenderCharacter();
Render();
