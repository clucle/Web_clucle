function Disk(xPos, yPos, dir) {
	this.xPos = xPos;
	this.yPos = yPos;
	this.dir = dir;
	this.speed = 4;

	this.motioncount = 0;
	this.motion = 0;
}

Disk.prototype.UpdateDisk = function() {
	switch (this.dir) {
		case 0: this.yPos-=this.speed; break;
		case 1: this.xPos+=this.speed; break;
		case 2: this.yPos+=this.speed; break;
		case 3: this.xPos-=this.speed; break;
	}

    this.motioncount++;
    if (this.motioncount > 1) {
        this.motioncount = 0;
        this.motion++;
        if (this.motion > 2) {
            this.motion = 0;
        }
    }

}