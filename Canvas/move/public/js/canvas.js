// Canvas Setting
var canvas = document.getElementById('Canvas');
var context = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;

// Player Setting
var player = new Player(100, 100);
// Disk Setting
var diskArray = new Array();

var imgPlayer = new Image();
imgPlayer.src = "public/resource/player.png";
var imgDisk = new Image();
imgDisk.src = "public/resource/disk.png"

function Render() {
		context.fillStyle='#ffffff';
		context.fillRect(0, 0, width, height);


		for (i = 0; i < diskArray.length; i++) {
			var disk = diskArray[i];
			disk.UpdateDisk();

			context.drawImage(imgDisk, disk.motion * 24, 0, 24, 26,
					disk.xPos - 12, disk.yPos - 13, 24, 26);
		}

		player.UpdatePlayer();
		if (player.state < 2) {
			context.drawImage(imgPlayer, player.motion * 24, player.dir * 32, 24, 32,
					player.xPos - 24, player.yPos - 32, 48, 64);
		} else if (player.state == 2) {
			context.drawImage(imgPlayer, player.motion * 24 + 72, player.dir * 32, 24, 32,
					player.xPos - 24, player.yPos - 32, 48, 64);
		}

		setTimeout(Render, 40);
}

Render();
