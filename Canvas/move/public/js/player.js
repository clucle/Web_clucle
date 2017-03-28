function Player(xPos, yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.direction = 2;
}

document.onkeydown = function(e) {
    var press = e || window.event;
    switch (press.keyCode) {
        case 38: alert("A"); break;
    }
}
