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

Player.prototype.UpdatePlayer = function() {
    var pressed = false;
    
    if (this.state < 2) {
        if (this.motion > 2) this.motion = 0;
        if (keys[32]) {
            this.state = 2;
            motioncount = 0;
            motion = 0;
            diskArray.push(new Disk(this.xPos, this.yPos, this.dir));
        }
        if (keys[38]) {
            this.yPos-=this.speed;
            this.dir = 0;
            pressed = true;
        }
        if (keys[40]) {
            this.yPos+=this.speed;
            this.dir = 2;
            pressed = true;
        }
        if (keys[39]) {
            this.xPos+=this.speed;
            this.dir = 1;
            pressed = true;
        }
        if (keys[37]) {
            this.xPos-=this.speed;
            this.dir = 3;
            pressed = true;
        }

        if (pressed == true) {
            this.motioncount++;
            if (this.motioncount > 6) {
                this.motioncount = 0;
                if (this.motion < 3) this.motion++;
                if (this.motion > 2) this.motion = 0;
            }
        } else {
            this.motioncount = 0;
            this.motion = 0;
        }    
    } else if (this.state == 2) {
        this.motioncount++;
        if (this.motioncount > 1) {
            this.motioncount = 0;
            this.motion++;
            if (this.motion > 2) {
                this.state = 0;
                this.motioncount = 0;
            }
        }
    }
    

}

document.body.addEventListener("keydown", function (e) {
    console.log(e.keyCode);
    keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});
