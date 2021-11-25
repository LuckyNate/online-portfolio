/* ballscript.js javascript by Nate Wyatt */

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = "#111111";
const width = canvas.width = 1024;
const height = canvas.height = 512;


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
        
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.xpos, this.ypos, this.size, 0, 2 * Math.PI);
        
    }

    update = function() {
        if ((this.xpos + this.size) >= width) {
            this.xpos = width-this.size;
            this.xvel = -(this.xvel);
            }
        if ((this.xpos) <= this.size) {
            this.xpos = this.size;
            this.xvel = -(this.xvel);
            }
        if ((this.ypos + this.size) >= height) {
                this.ypos = height-this.size;
                this.yvel = -(this.yvel);
            }
        if ((this.ypos) <= this.size) {
                this.ypos = this.size;
                this.yvel = -(this.yvel);
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
        let ball = new Ball(random(1,width), random(1,height), random(1,4), random(1,4), hexcol, random(2, 12));
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
    return Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
}

function checkbounce(ballA){
    for(let j=0; j<ballList.length; j++){
        if(ballA != ballList[j]){
            if(ballA.size+ballList[j].size > distance(ballA, ballList[j])){
                ballList[j].xvel = (-ballA.xvel*ballA.size)/ballList[j].size;
                ballList[j].yvel = (-ballA.yvel*ballA.size)/ballList[j].size;
            }
        }
    }

}

function gameLoop(){
    ctx.clearRect(0,0,width, height);
    for(let i=0; i < ballList.length; i++){
        ballList[i].update();
        ballList[i].draw();
        checkbounce(ballList[i]);
    } 
    window.requestAnimationFrame(gameLoop);
    
}

init();




  
  
  
  

