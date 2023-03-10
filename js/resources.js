
class Resources extends DrawGame {
    constructor(canvas, ctx, bird, bg, fg, pipeUp, pipeBottom, backgroudX, gap, i, birdSource, birdResult, sizeBird, posX, posY, grav, myReq, endGame, tableScore, buttonStart, fly, score_audio, score, end_audio, scoreRec, mouseX, mouseY) {
        super(canvas, ctx, bird, bg, fg, pipeUp, pipeBottom, backgroudX, gap, i, birdSource, birdResult, sizeBird, posX, posY, grav, myReq, endGame, tableScore, buttonStart, fly, score_audio, score, end_audio, scoreRec, mouseX, mouseY)
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