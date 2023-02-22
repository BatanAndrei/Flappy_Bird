
// const game = new Game();
// game.prepare().then(() => {
//   game.start();
// })

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = 'assets/sprite.png';
const bg = new Image();
bg.src = 'assets/blue.jpg';

let gap = 30;

document.addEventListener('click', moveUp);

function moveUp() {
    posY -=20;   
}

let pipe = [];

pipe[0] = {
    x: canvas.width,
    y: 0,
}

const SPEED = 3.1;
const SIZE = [34, 26];
let index = 0;
let posX = 10;
let posY = 150;
let grav = 1;

const render = () => {

    index += 0.3;
  
    const backgroudX = -((index * SPEED) % canvas.width);

    ctx.drawImage(bg, 0, 0);

    const bgSource = {
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height,
    };

    const bgPartOneResult = {
        x: backgroudX + canvas.width,
        y: 286,
        width: canvas.width,
        height: canvas.height,
    };

    const bgPartTwoResult = {
            x: backgroudX,
            y:286,
            width: canvas.width,
            height: canvas.height,
          }

    ctx.drawImage(
        img,
        
        bgSource.x,
        bgSource.y,
        bgSource.width,
        bgSource.height,
        
        bgPartOneResult.x,
        bgPartOneResult.y,
        bgPartOneResult.width,
        bgPartOneResult.height
    );

    ctx.drawImage(
        img,
        
        bgSource.x,
        bgSource.y,
        bgSource.width,
        bgSource.height,
        
        bgPartTwoResult.x,
        bgPartTwoResult.y,
        bgPartTwoResult.width,
        bgPartTwoResult.height
    );

    for( let i = 0; i < pipe.length; i++){

        const pipeTopSource = {
            x: 554,
            y:200,
            width: 54,//canvas.width,
            height: 250,//canvas.height,
    
        };
    
        const pipeTopResult = {
            x: pipe[i].x,
            y: pipe[i].y,
            width: 54,//canvas.width,
            height: 250,//canvas.height,
    
        };
    
        ctx.drawImage(
            img,
            
            pipeTopSource.x,
            pipeTopSource.y,
            pipeTopSource.width,
            pipeTopSource.height,
            
            pipeTopResult.x,
            pipeTopResult.y,
            pipeTopResult.width,
            pipeTopResult.height
        );
    
        const pipeBottomSource = {
            x: 502,
            y:0,
            width: 54,
            height: 400,//canvas.height,
    
        };
    
        const pipeBottomResult = {
            x: pipe[i].x,//110,
            y: pipe[i].y + pipeTopResult.height +gap,//250 + gap,
            width: 54,
            height: 400,//canvas.height,
    
         };
         
        ctx.drawImage(
            img,
            
            pipeBottomSource.x,
            pipeBottomSource.y,
            pipeBottomSource.width,
            pipeBottomSource.height,
            
            pipeBottomResult.x,
            pipeBottomResult.y,
            pipeBottomResult.width,
            pipeBottomResult.height
        );
        pipe[i].x --;

        if(pipe[i].x == 125){
            pipe.push({
                x: canvas.width,
                y: Math.floor(Math.random() * pipeTopResult.height) - pipeTopResult.height,
            });
        }
   };

    const floorSource = {
        x: 277,
        y:0,
        width: 223,
        height: 114,

    };

    const floorResult = {
        x:0,
        y:400,
        width: canvas.width,
        height: 114,

    };

    ctx.drawImage(
        img,
        
        floorSource.x,
        floorSource.y,
        floorSource.width,
        floorSource.height,
        
        floorResult.x,
        floorResult.y,
        floorResult.width,
        floorResult.height
    );

    const birdSource = {
            x: 276,
            y: 114 + (Math.floor((index % 9) / 3) * SIZE[1]),
            width: SIZE[0],
            height: SIZE[1],
          };
        
          const birdResult = {
            x: posX,
            y: posY,
            width: SIZE[0],
            height: SIZE[1],
          };
          
          ctx.drawImage(
            img,
        
            birdSource.x,
            birdSource.y,
            birdSource.width,
            birdSource.height,
        
            birdResult.x,
            birdResult.y,
            birdResult.width,
            birdResult.height
          );

          posY += grav;
        window.requestAnimationFrame(render);
};

img.onload = render;