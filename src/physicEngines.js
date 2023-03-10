// class PhysicEngine {
//     constructor(gravity) {
//         this._gravity = gravity;
//     }
//     update(entity, delta){
//         if(entity.falling){
//       entity.speed += this._gravity * delta;
//       entity.y += this.speed * delta;
//         }
//     }
// }

class LogicAndScore extends DrawGame {
    constructor(canvas, ctx, bird, bg, fg, pipeUp, pipeBottom, backgroudX, gap, i, birdSource, birdResult, sizeBird, posX, posY, grav, myReq, endGame, tableScore, buttonStart, fly, score_audio, score, end_audio, scoreRec, mouseX, mouseY) {
       super(canvas, ctx, bird, bg, fg, pipeUp, pipeBottom, backgroudX, gap, i, birdSource, birdResult, sizeBird, posX, posY, grav, myReq, endGame, tableScore, buttonStart, fly, score_audio, score, end_audio, scoreRec, mouseX, mouseY)
       
    }

    control() {
       game.canvas.onclick = function() {
           game.posY -=50;  
           game.fly_audio.play();
       }
   
        window.addEventListener("keydown" ,moveUp);
         function moveUp() {
           game.posY -=50;  
           game.fly_audio.play();
       }
    }

    birdNoSky() {
       game.posY += game.grav;

       if(game.posY + game.sizeBird[1] <= game.canvas.height - 512){
         
         game.posY += 10;
       }
    }

    appearancePipe() {
           game.gap = 100;
           
           for( game.i = 0; game.i < game.pipe.length; game.i++) {
               game.ctx.drawImage(game.pipeUp, game.pipe[game.i].x, game.pipe[game.i].y);
               game.ctx.drawImage(game.pipeBottom, game.pipe[game.i].x, game.pipe[game.i].y + game.pipeUp.height + game.gap);
               
               game.pipe[game.i].x--;

               if(game.pipe[game.i].x == 100) {
               game.pipe.push({
               x : game.canvas.width,
               y : Math.floor(Math.random() * game.pipeUp.height) - game.pipeUp.height
               });
           }
               logic.deadBird();
               logic.gameScore();
       }
       }

    currentScore() {
        game.ctx.fillStyle = "#000";
        game.ctx.font = "24px Verdana";
        game.ctx.fillText("Score: " + game.score, 10, game.canvas.height - 20);
       }

    gameScore() {
           localStorage.getItem('record') > 0 ? game.scoreRec = localStorage.getItem('record') : game.scoreRec = 0;
   
       if(game.pipe[game.i].x == 60) {
           localStorage.getItem('record') > 0 ? game.scoreRec = localStorage.getItem('record') : game.scoreRec = 0;
           game.scoreRec;
           game.score++;
   
           game.score_audio.play();
           }
   
           if (game.score > localStorage.getItem('record')){
               game.scoreRec++;
               game.scoreRec = game.score;
               localStorage.setItem('record', game.scoreRec);
           }
           
    }

   deadBird() {
       if(game.posX + game.sizeBird[0] >= game.pipe[game.i].x
           && game.posX <= game.pipe[game.i].x + game.pipeUp.width
           && (game.posY <= game.pipe[game.i].y + game.pipeUp.height
           || game.posY + game.sizeBird[1] >= game.pipe[game.i].y + game.pipeUp.height + game.gap) || game.posY + game.sizeBird[1] >= game.canvas.height - game.fg.height) {
        
           game.drawTextGameOver();
           game.drawTabScore();
           game.drawButStart();
           game.drawGround();
           game.drawMedal();
   
           game.end_audio.play();
   
           game.ctx.font = "bold 22px Verdana";
           game.ctx.fillStyle = "#000";
           game.ctx.fillText(game.score, 200, game.canvas.height - 282);
           game.ctx.fillText(game.scoreRec, 200, game.canvas.height - 241);

           window.cancelAnimationFrame(this.myReq.bind(this));
           }
   }
   
   update() {
       game.drawBack();
       logic.appearancePipe();
       game.drawGround();
       game.drawBird();
       logic.birdNoSky();
       logic.currentScore();
       
       this.myReq = window.requestAnimationFrame(this.update.bind(this));
    }
}

let logic = new LogicAndScore();
logic.control();
logic.update();
logic.appearancePipe(); 