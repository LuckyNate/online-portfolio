/*<!-- doctype javascript -->*/
/*==========================================================================*/
class Ball{
	constructor(x, y, radius, xspeed, yspeed){
		this.xpos = x;
		this.ypos = y;
		this.size = radius;
		this.xspd = xspeed;
		this.yspd = yspeed;
		this.color = "rgb(225,225,225)";
		while(this.radius == 0){this.radius = 1;}
		while(this.xspd == 0){this.xspd = 1;}
		while(this.yspd == 0){this.yspd = 1;}
		console.log("Ball constructed");
	}
	
	bounce() {
		if (this.xpos + this.size >= this.canvasW){
			this.xspd = -this.xspd;
		}
		if (this.xpos - this.size <= 0){
			this.xspd = -this.xspd;
		}
		if (this.ypos + this.size >= this.canvasH){
			this.yspd = -this.yspd;
		}
		if(this.ypos - this.size <= 0){
			this.yspd = -this.yspd;
		}
		console.log("ball bounced");
	}
	
	draw() {
		
		console.log("ball drawn");
	}
	
	move() {
		this.xpos+=this.xspeed;
		this.ypos+=this.yspeed;
		console.log("ball moved");
	}	
}
/*==========================================================================*/
run = true;
var canvas = document.getElementById("ballscanvas");
var ctx = canvas.getContext("2d");
console.log("Starting");
setInterval(run, 33)
{
	
    canvasW = canvas.width;
    canvasH = canvas.height;
	ctx.fillStyle = "rgb(30,30,30)";
	ctx.fillRect(0, 0, canvasW, canvasH);

	var ball = new Ball(10,10,10,10,10);

	
	var count = 0;
	while(run){
//		console.log("GameLoop")
		ball.bounce();
		ball.move();
		ball.draw();
		count ++;
	}

}