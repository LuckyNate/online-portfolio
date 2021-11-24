/* ballscript.js javascript by Nate Wyatt */

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = "#111111";
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerWidth/2;

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

function randColor(){
    console.log("#" + Math.floor(Math.random()*16777215).toString(16));
}

function refresh() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillRect(0, 0, width, height);
  }
 
class Ball{
    constructor(xpos, ypos, xvel, yvel, color, size) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.xvel = xvel;
        this.yvel = yvel;
        this.color = color;
        this.size = size;
    }
  
    draw = function() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.xpos, this.ypos, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    update = function() {
        if ((this.xpos + this.size) > width) {
            this.xpos = width-this.size;
            this.xvel = -(this.xvel);
            }
        if ((this.xpos-this.size) < 0) {
            this.xpos = this.size;
            this.xvel = -(this.xvel);
            }
        if ((this.ypos + this.size) >= height) {
                this.ypos = height-this.size;
                this.yvel = -(this.yvel);
            }
        if ((this.ypos - this.size) <= 0) {
                this.ypos = this.size;
                this.yvel = -(this.xvel);
                }
        this.xpos += this.xvel;
        this.ypos += this.yvel;
    }
}  
        
  
  var ballList = [];
  var hexcol = "";
  while(ballList.length < 25){
    hexcol = ("#"+Math.floor(Math.random()*16777215).toString(16));
    let ball = new Ball(random(1,canvas.width), random(1, canvas.height), random(1,100), random(1,100), hexcol, random(10, 60));
    ball.update();
    ball.draw();
    ballList.push(ball);

  }

  
  
  
  

