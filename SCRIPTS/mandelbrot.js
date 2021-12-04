/* Mandelbrot Fractal Zoom - mandelbrot.js by Nate Wyatt */
const brotcanvas = document.getElementById('mandelbrotcanvas');
const brotctx = brotcanvas.getContext('2d');
brotctx.backgroundColor = "#111111";
const brotwidth = brotcanvas.width = window.innerWidth;
const brotheight = brotcanvas.height = window.innerHeight;

function randColor(){
    console.log("#" + Math.floor(Math.random()*16777215).toString(16));
}

function refresh(){ //resets the canvas to blank
    brotctx.clearRect(0,0,brotwidth,brotheight);
}   

function getMouse(){ // fix this to get mouseX, mouseY
    console.log(MouseEvent);
}

function setup(){


    //Setup the screen coords between -2 and +2;
    for(var x=0; x<brotwidth; x++){
        for(var y=0; y<brotheight; x++){
            var mapX = map(x, 0, brotwidth,-2*(brotwidth/brotheight), 2*(brotwidth/brotheight));
            var mapY = map(y, 0, brotheight, -2, 2);
        }
    //initialize the variables
        var z = 0;
        var n = 0;
        while(n<100){
            var nmapx = a**2 - b**2;
            var nmapy  = 2*a*b;
            mapx+=nmapx;
            mapy+=nmapy;
            if(Math.abs(a+b) > 16){
                break;
            }
            n++;
        }
        if (n === 100){

            
        }
    }
   
    window.requestAnimationFrame(gameLoop);
}


function gameLoop(){
    window.requestAnimationFrame(gameLoop);
    /* gameloop logic */    
}

setup();

