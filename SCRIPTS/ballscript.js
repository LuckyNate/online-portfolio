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
    return("#"+Math.floor(Math.random()*16777215).toString(16));
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
        this.xmnt = this.xvel*this.size;
        this.ymnt = this.yvel*this.size;
    }

    move = function() {
        while(this.xvel == 0){
            this.xvel = random(-1,1);
        }
        while(this.yvel == 0){
            this.yvel = random(-1,1);
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
        let ball = new Ball(random(1,width), random(1,height), random(-8,8), random(-8,8), randColor(), random(1,16));
        //uncomment below to force balls to have non-zero velocity
        if(ball.xvel == 0 || ball.yvel==0){
            ball.move();
        } 
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

function bounce(ballA, ballB){ //fix later
    x1 = ballA.xpos;
    y1 = ballA.ypos;
    x2 = ballB.xpos;
    y2 = ballB.ypos;
    if(distance(ballA, ballB) <= ballA.size+ballB.size){
        if(x1 < x2){
            ballA.xvel = -Math.sqrt(ballB.xmnt**2)/ballA.size;
            ballB.xvel = Math.sqrt(ballA.xmnt**2)/ballB.size;
            ballA.draw();
            ballB.draw();
        }
        else{
            ballA.xvel = Math.sqrt(ballB.ymnt**2)/ballA.size;
            ballB.xvel = -Math.sqrt(ballA.ymnt**2)/ballB.size;
            ballA.draw();
            ballB.draw();  
        }

        if(y1 < y2){
            ballA.yvel =-Math.sqrt(ballB.xmnt**2)/ballA.size;
            ballB.yvel = Math.sqrt(ballA.ymnt**2)/ballB.size;
            ballA.draw();
            ballB.draw();       
        }
        else{
            ballA.yvel = Math.sqrt(ballB.xmnt**2)/ballA.size;
            ballB.yvel = -Math.sqrt(ballA.ymnt**2)/ballB.size;
            ballA.draw();
            ballB.draw();
        }
    }
}

function gameLoop(){
    ballctx.globalAlpha = 1.0;
    ballctx.fillStyle = "#111111";
    ballctx.fillRect(0,0, width, height);
    for(let i=0; i < ballList.length; i++){
        for(j=0; j< ballList.length; j++){
            if(i==j){
                continue;
            }
            else{
                bounce(ballList[i], ballList[j]);
            }
        }
        ballList[i].update();
        ballList[i].draw();
    }
    window.requestAnimationFrame(gameLoop);
}

init();




  
  
  
  

