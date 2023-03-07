// class Game {
//     constructor(){
//         this._config = new Config();

//         this._canvas = document.getElementById(this._config.canvas.id);
//         this._canvas.width = this._config.canvas.width;
//         this._canvas.height = this._config.canvas.height;

//         this.width = this._config.canvas.width;
//         this.height = this._config.canvas.height;

//         this._drawEngine = new CanvasDrawEngine({canvas: this._canvas});
//         this._physicEngine = new PhysicEngine({gravity: this._config.gravity});
//         this._resourceLoader = new ResourceLoader();
//         this._inputHandler = new MouseInputHandler({
//             left: ({x, y}) => {
//                 this._bird.flap();
//             }
//         });

// }

// async prepare() {
//     this._spriteSheet = this._resourceLoader.load({
//         type: RESOURCE_TYPE.IMAGE,
//         src: this._config.spriteSheet.src,
//         width: this._config.spriteSheet.width,
//         height: this._config.spriteSheet.height,

//     })
// }

// reset() {
//     this._score = 0,
//     this._bird = new Bird(x, y, width, height, frames, spriteSheet, flapSpeed, physicEngine, drawEngine, game, {
//         x: this._config.bird.x,
//         y: this._config.bird.y,
//         width: this._config.bird.width,
//         height: this._config.bird.height,
//         frames: confthis._configig.bird.frames,
//         spriteSheet: this._spriteSheet,
//         flapSpeed: this._config.bird.flapSpeed,
//         physicEngine: this._physicEngine, 
//         drawEngine: this._drawEngine,
//         game: this,
        
//     })
// }

// update(delta) {
//     this._bird.update(delta);
// }

// draw() {
//     this._bird.draw();
// }

// _loop() {
//     const now = Date.now();
//     const delta = this._lastUpdate - now;

//     //this.reset();
//     this.update(delta / 1000.0);
//     this._drawEngine.clear();
//     this.draw();

//     this._lastUpdate = now;

//     requestAnimationFrame(this.start().bind(this));
// }

// start() {
//     this._inputHandler.subscribe();
//     this._lastUpdate = Date.now();
//     this._loop();
// }


// gameOver() {
//     alert(`Game Over: ${this._score}`);
// }
// }



// Начало работы с игрой - код с классом ES6

class DrawGame {
    constructor(canvas, ctx, bird, bg, fg, pipeUp, pipeBottom, backgroudX, gap, i, birdSource, birdResult, sizeBird, posX, posY, grav, myReq, endGame, tableScore, buttonStart, fly, score_audio, score, end_audio, scoreRec, mouseX, mouseY, birdD, rotation, medal){
        this.canvas = canvas;
        this.ctx = ctx;

        this.bg = bg;
        this.bird = bird;
        this.fg = fg;
        this.pipeUp = pipeUp;
        this.pipeBottom = pipeBottom;
        this.birdSource = birdSource;
        this.birdResult = birdResult;
        this.birdD = birdD;
        this.tableScore = tableScore;
        this.buttonStart = buttonStart;
        this.endGame = endGame;
        this.medal = medal;

        this.rotation = rotation;

        this.myReq = myReq;

        this.fly_audio = fly;
        this.score_audio = score_audio;
        this.end_audio = end_audio;

        this.score = score;
        this.scoreRec = scoreRec;
       
        this.sizeBird = sizeBird;
        this.speedBack = 3.1;
        this.index = 0;
        this.backgroudX = backgroudX;

        this.gap = gap;
        this.posX = posX;
        this.posY = posY;

        this.pipe = [];
        this.i = i;

        this.grav = grav;

        this.mouseX = mouseX;
        this.mouseY = mouseY;
    }

canvasGame() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.birdD = new Image();
    this.birdD.src = "assets/bird.png"

    this.bird = new Image();
    this.bird.src = "assets/sprite.png";

    this.bg = new Image();
    this.bg.src = "assets/bg.png";

    this.fg = new Image();
    this.fg.src = "assets/fg.png";

    this.pipeUp = new Image();
    this.pipeUp.src = "assets/pipeUp.png";

    this.pipeBottom = new Image();
    this.pipeBottom.src = "assets/pipeBottom.png";

    this.endGame = new Image();
    this.endGame.src = "assets/sprite.png";

    this.tableScore = new Image();
    this.tableScore.src = "assets/sprite.png";

    this.buttonStart = new Image();
    this.buttonStart.src = "assets/sprite.png";

    this.medal = new Image();
    this.medal.src = "assets/sprite.png";

    this.fly_audio = new Audio();
    this.fly_audio.src = "audio/fly.mp3";

    this.score_audio = new Audio();
    this.score_audio.src = "audio/score.mp3";

    this.end_audio = new Audio();;
    this.end_audio.src = "audio/gameover.mp3";

    this.pipe[0] = {
        x: this.canvas.width,
        y: 0,
    };

    this.score = 0;
    this.sizeBird = [34, 26];
    this.posX = 50;
    this.posY = 180;
    this.grav = 1.5; 
};

drawBack() {
    this.index += 0.3;

    this.backgroudX = -((this.index * this.speedBack) % this.canvas.width);

    this.ctx.drawImage(this.bg, this.backgroudX + this.canvas.width, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.bg, this.backgroudX, 0, this.canvas.width, this.canvas.height);
}

drawBird() {
        //this.rotation = 5;

        this.birdSource = {
                x: 276,
                y: 114 + (Math.floor((this.index % 9) / 3) * this.sizeBird[1]),
                width: this.sizeBird[0],
                height: this.sizeBird[1],
              };
            
        this.birdResult = {
                x: this.posX,
                y: this.posY,
                width: this.sizeBird[0],
                height: this.sizeBird[1],
              };

            //   this.ctx.save();
            //   this.ctx.translate(this.sizeBird[0] / 2, this.sizeBird[1] / 2);
            //   this.ctx.rotate(this.rotation * Math.PI / 180);
              
              this.ctx.drawImage(
                this.bird,
            
                this.birdSource.x,
                this.birdSource.y,
                this.birdSource.width,
                this.birdSource.height,
            
                this.birdResult.x,
                this.birdResult.y,
                this.birdResult.width,
                this.birdResult.height,
              );

              //this.ctx.restore();

              this.posY += this.grav;

              if(this.posY + this.sizeBird[1] <= this.canvas.height - 512){
                
                this.posY += 10;
              }

              this.ctx.fillStyle = "#000";
              this.ctx.font = "24px Verdana";
              this.ctx.fillText("Score: " + this.score, 10, this.canvas.height - 20);
    }


drawGround() {
     this.ctx.drawImage(this.fg, 0, this.canvas.height - this.fg.height);
}

 drawTextGameOver() {
    this.endGameSource = {
        x: 194,
        y: 229,
        width: 184,
        height: 34,
      };
    
    this.endGameResult = {
        x: 45,
        y: 140,
        width: 184,
        height: 34,
      };
      
      this.ctx.drawImage(
        this.endGame,
    
        this.endGameSource.x,
        this.endGameSource.y,
        this.endGameSource.width,
        this.endGameSource.height,
    
        this.endGameResult.x,
        this.endGameResult.y,
        this.endGameResult.width,
        this.endGameResult.height
      );
      }

    drawTabScore() {
      this.tableScoreSource = {
        x: 175,
        y: 273,
        width: 227,
        height: 117,
      };
    
     this.tableScoreResult = {
        x: 25,
        y: 180,
        width: 227,
        height: 117,
      };
      
      this.ctx.drawImage(
        this.tableScore,
    
        this.tableScoreSource.x,
        this.tableScoreSource.y,
        this.tableScoreSource.width,
        this.tableScoreSource.height,
    
        this.tableScoreResult.x,
        this.tableScoreResult.y,
        this.tableScoreResult.width,
        this.tableScoreResult.height
      );
      } 

      drawButStart() {
      this.buttonStartSource = {
        x: 246,
        y: 400,
        width: 82,
        height: 29,
      };
    
     this.buttonStartResult = {
        x: 100,
        y: 310,
        width: 82,
        height: 29,
      };
      
      this.ctx.drawImage(
        this.buttonStart,
    
        this.buttonStartSource.x,
        this.buttonStartSource.y,
        this.buttonStartSource.width,
        this.buttonStartSource.height,
    
        this.buttonStartResult.x,
        this.buttonStartResult.y,
        this.buttonStartResult.width,
        this.buttonStartResult.height
      );  

      game.canvas.onmousemove = function(event) {
        game.mouseX = event.offsetX;
         game.mouseY = event.offsetY;

          if (game.mouseX >= game.buttonStartResult.x && game.mouseX <= (game.buttonStartResult.x + game.buttonStartResult.width) && game.mouseY >= game.buttonStartResult.y && game.mouseY <= (game.buttonStartResult.y + game.buttonStartResult.height)) {
            
            game.canvas.onclick = function() {
              location.reload();
           }
          } else {
            game.canvas.onclick = null;
         }
        }
 }

 drawMedal() {
    this.medalSource = {
        x: 359,
        y: 157,
        width: 44,
        height: 44,
      };
    
     this.medalResult = {
        x: 50,
        y: 220,
        width: 44,
        height: 44,
      };
      
      this.ctx.drawImage(
        this.medal,
    
        this.medalSource.x,
        this.medalSource.y,
        this.medalSource.width,
        this.medalSource.height,
    
        this.medalResult.x,
        this.medalResult.y,
        this.medalResult.width,
        this.medalResult.height
      );
 }
}

let game = new DrawGame();
game.canvasGame();
game.drawBack();
game.drawGround();
game.drawBird();
game.drawMedal();



class LogicAndScore extends DrawGame {
     constructor(canvas, ctx, bird, bg, fg, pipeUp, pipeBottom, backgroudX, gap, i, birdSource, birdResult, sizeBird, posX, posY, grav, myReq, endGame, tableScore, buttonStart, fly, score_audio, score, end_audio, scoreRec, mouseX, mouseY, birdD, rotation) {
        super(canvas, ctx, bird, bg, fg, pipeUp, pipeBottom, backgroudX, gap, i, birdSource, birdResult, sizeBird, posX, posY, grav, myReq, endGame, tableScore, buttonStart, fly, score_audio, score, end_audio, scoreRec, mouseX, mouseY, birdD, rotation)
     }

     control() {
        game.canvas.onclick = function() {
            game.posY -=50;  
            game.fly_audio.play();
        }
    
         window.addEventListener("keydown" ,moveUp);
          function moveUp() {
            game.posY -=50;  
            game.fly.play();
        }
     }

     appearancePipe() {
            game.gap = 100;
            
            for( game.i = 0; game.i < game.pipe.length; game.i++) {
                game.ctx.drawImage(game.pipeUp, game.pipe[game.i].x, game.pipe[game.i].y);
                game.ctx.drawImage(game.pipeBottom, game.pipe[game.i].x, game.pipe[game.i].y + game.pipeUp.height + game.gap);
                  
                game.pipe[game.i].x--;
                //console.log(game.pipe.length)

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
        
        this.myReq = window.requestAnimationFrame(this.update.bind(this));
     }
}

let logic = new LogicAndScore();
logic.control();
logic.update();
logic.appearancePipe(); 



class Resources extends DrawGame {
    constructor(canvas, ctx, bird, bg, fg, pipeUp, pipeBottom, backgroudX, gap, i, birdSource, birdResult, sizeBird, posX, posY, grav, myReq, endGame, tableScore, buttonStart, fly, score_audio, score, end_audio, scoreRec, mouseX, mouseY, birdD, rotation) {
        super(canvas, ctx, bird, bg, fg, pipeUp, pipeBottom, backgroudX, gap, i, birdSource, birdResult, sizeBird, posX, posY, grav, myReq, endGame, tableScore, buttonStart, fly, score_audio, score, end_audio, scoreRec, mouseX, mouseY, birdD, rotation)
    }

    loadResources() {
        window.onload = (event) => {
            game.drawBack();
            logic.appearancePipe();
            game.drawGround();
            game.drawBird();
          };
     };
}

let resources = new Resources();
resources.loadResources();