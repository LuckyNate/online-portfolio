/* Mandelbrot Fractal Zoom - mandelbrot.js by Nate Wyatt */

const brotcanvas = document.getElementById('mandelbrotcanvas');
const brotctx = brotcanvas.getContext('2d');
brotctx.backgroundColor = "#111111";
const brotwidth = brotcanvas.width = window.innerWidth;
const brotheight = brotcanvas.height = window.innerHeight;


function random(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function randColor(){
    console.log("#" + Math.floor(Math.random()*16777215).toString(16));
}

function refresh(){
    brotctx.clearRect(0,0,brotwidth,brotheight);
}   

function init(){
    /* put game setup here */
    window.requestAnimationFrame(gameLoop);
}


function gameLoop(){
    /* gameloop logic */
    refresh();
    window.requestAnimationFrame(gameLoop);
    
}

init();
