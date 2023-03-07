// const RESOURCE_TYPE = {
//     IMAGE: 'image',
// }

// class ResourceLoader {

//     _typeLoaderMap = {
//       [RESOURCE_TYPE.IMAGE]: async (src, width, height) => {

//         return new Promise((resolve, reject) => {

//         const image = new Image(width, height)

//         image.addEventListener('load', () =>  resolve(image));
//         image.addEventListener('error', (error) =>  reject(error));
//         image.src = src;
//     })
//     }
//     }

//     async load(resource) {
//         const loader = this._typeLoaderMap[resource.type];
//         return await loader(resource);
//     }
// }

import  DrawGame from "src/game.js";
new DrawGame();

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