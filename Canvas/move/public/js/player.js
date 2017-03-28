var keys = [];

function Player(xPos, yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.dir = 2;
    this.speed = 6;
    this.motioncount = 0;
    this.motion = 0;
    // 0: normal
    this.state = 0;
}

function UpdatePlayer(player) {
    var pressed = false;
    if (player.motion > 2) player.motion = 0;
    if (keys[38]) {
        player.yPos-=player.speed;
        player.dir = 0;
        pressed = true;
    }
    if (keys[40]) {
        player.yPos+=player.speed;
        player.dir = 2;
        pressed = true;
    }
    if (keys[39]) {
        player.xPos+=player.speed;
        player.dir = 1;
        pressed = true;
    }
    if (keys[37]) {
        player.xPos-=player.speed;
        player.dir = 3;
        pressed = true;
    }
    if (pressed == true) {
        player.motioncount++;
        if (player.motioncount > 6) {
            player.motioncount = 0;
            if (player.motion < 3) player.motion++;
            if (player.motion > 2) player.motion = 0;
        }
    } else {
        player.motioncount = 0;
        player.motion = 0;
    }
}

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});
