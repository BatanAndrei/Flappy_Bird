// class Config {
//     gravity = 300;

//     canvas = {
//         id: 'game',
//         width: 480,
//         height: 320,
//     }

//     spriteSheet = {
//         width: 606,
//         height: 428,
//         src: './assets/sprite.png',
        
//     }
    
//     bird = {
//        x: 50,
//        y: 100,
//        width: 34,
//        height: 26,

//        flapSpeed: 300,

//        frames: [
//         {
//             x: 276,
//             y: 112,
//             w: 34,
//             h: 26,
//         },
//         {
//             x: 276,
//             y: 138,
//             w: 34,
//             h: 26,
//         },
//         {
//             x: 276,
//             y: 164,
//             w: 34,
//             h: 26,
//         },
//         {
//             x: 276,
//             y: 138,
//             w: 34,
//             h: 26,
//         }
//        ]
//     }
    
// }

class Config {
constructor(canvas, ctx, bg, bird, fg, pipeUp, pipeBottom, birdSource, birdResult, tableScore, buttonStart, endGame, medal, myReq, fly, score_audio, end_audio, score, scoreRec,  sizeBird, backgroudX, gap, posX, posY, grav, mouseX, mouseY, i) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.bg = bg;
    this.bird = bird;
    this.fg = fg;
    this.pipeUp = pipeUp;
    this.pipeBottom = pipeBottom;
    this.birdSource = birdSource;
    this.birdResult = birdResult;
    this.tableScore = tableScore;
    this.buttonStart = buttonStart;
    this.endGame = endGame;
    this.medal = medal;

    this.myReq = myReq;

    this.fly_audio = fly;
    this.score_audio = score_audio;
    this.end_audio = end_audio;

    this.score = score;
    this.scoreRec = scoreRec;

    this.sizeBird = sizeBird;
    this.backgroudX = backgroudX;

    this.gap = gap;
    this.posX = posX;
    this.posY = posY;

    this.grav = grav;

    this.mouseX = mouseX;
    this.mouseY = mouseY;

    this.i = i;
}
}