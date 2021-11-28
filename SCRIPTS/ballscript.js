/* ballscript.js javascript by Nate Wyatt */

let ballcanvas = document.getElementById('ballcanvas');
let ballctx = ballcanvas.getContext('2d');

let width = ballcanvas.width = window.innerWidth;
let height = ballcanvas.height = window.innerHeight;

// resize the canvas to fill browser window dynamically
window.addEventListener('resize', resizeCanvas, false);

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

function randColor(){
    console.log("#" + Math.floor(Math.random()*16777215).toString(16));
}

function resizeCanvas() {
    ballcanvas.width = window.innerWidth;
    ballcanvas.height = window.innerHeight;
    init();

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

    move = function() {
        while(this.xvel == 0){
            this.xvel = random(-4,4);
        }
        while(this.yvel == 0){
            this.yvel = random(-4,4);
        }
    }
  
    draw = function() {
        ballctx.globalAlpha = 1.0;
        ballctx.beginPath();
        ballctx.fillStyle = this.color;
        ballctx.arc(this.xpos, this.ypos, this.size, 0, 2 * Math.PI);
        ballctx.fill();
        
    }

    update = function() {
        if ((this.xpos + this.size) >= width) {
            this.xpos = width-this.size;
            this.xvel *= -1;
            }
        if ((this.xpos) <= this.size) {
            this.xpos = this.size;
            this.xvel *= -1;
            }
        if ((this.ypos + this.size) >= height) {
                this.ypos = height-this.size;
                this.yvel *= -1;
            }
        if ((this.ypos) <= this.size) {
                this.ypos = this.size;
                this.yvel *= -1;
                }
        this.xpos += this.xvel;
        this.ypos += this.yvel;
    }
}  

var ballList = [];  


function init(){
    var hexcol = "";
    while(ballList.length < 100){
        hexcol = ("#"+Math.floor(Math.random()*16777215).toString(16));
        let ball = new Ball(random(1,width), random(1,height), random(-8,8), random(-8,8), hexcol, random(10, 20));
        if(ball.xvel == 0 || ball.yvel==0){
            ball.move();
        }

        while(ball.yvel == 0)
        {};
        ball.update();
        ball.draw();
        ballList.push(ball);
    }
    window.requestAnimationFrame(gameLoop);
}



function distance(ballA, ballB){
    x1 = ballA.xpos;
    y1 = ballA.ypos;
    x2 = ballB.xpos;
    y2 = ballB.ypos;
    return Math.sqrt((x1-x2)**2 + (y1-y2)**2);
}

function bounce(ballA){ //fix later
        ballA.xvel *= -1;
        ballA.yvel *= -1;
}

function gameLoop(){
    ballctx.globalAlpha = .05;
    ballctx.fillStyle = "#111111";
    ballctx.fillRect(0,0, width, height);
    for(let i=0; i < ballList.length; i++){
        ballList[i].update();
        ballList[i].draw();
    }
    window.requestAnimationFrame(gameLoop);
}

init();




  
  
  
  

