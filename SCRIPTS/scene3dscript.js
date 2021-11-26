/* scene3d.js javascript by Nate Wyatt */

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = "#111111";
const width = canvas.width = 1024;
const height = canvas.height = 512;


function random(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

function randColor(){
    console.log("#" + Math.floor(Math.random()*16777215).toString(16));
}

     
function init(){
    /* put game setup here */
    window.requestAnimationFrame(gameLoop);
}


function gameLoop(){
    /* gameloop logic */
    window.requestAnimationFrame(gameLoop);
    
}

init();
