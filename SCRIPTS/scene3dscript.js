/* scene3d.js javascript by Nate Wyatt */

const s3dcanvas = document.getElementById('scene3dcanvas');
const s3dctx = s3dcanvas.getContext('2d');
s3dctx.fillStyle = "#111111";
const s3dwidth = s3dcanvas.width = 1024;
const s3dheight = s3dcanvas.height = 512;


function random(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function randColor(){
    console.log("#" + Math.floor(Math.random()*16777215).toString(16));
}

function refresh(){
    s3dctx.clearRect(0,0,s3dwidth,s3dheight);
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
