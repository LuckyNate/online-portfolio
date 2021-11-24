/* firstscript.ja javascript by Nate Wyatt */


class Ball{
    constructor(xpos, ypos, xvel, yvel, color){
    this.xpos = canvas.width/2;
    this.ypos = canvas.width/2;
    this.xvel = Math.floor(Math.random()) % 60;
    this.xvel = Math.floor(Math.random()) % 60;
    console.log(this);
    }


}

//set up game canvas
canvas = document.getElementById("ballcanvas");
context = canvas.getContext("2d");

ball = new Ball;

//set up game loop
const FPS = 60;
setInterval(update, 1000/FPS);