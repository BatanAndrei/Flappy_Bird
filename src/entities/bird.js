// class Bird extends Entity {
//     constructor(params){
//         super(params)
//         const {frames, spriteSheet, flapSpeed, physicEngine, drawEngine, game} = params;
//         this._flapSpeed = params.flapSpeed;
//         this._physicEngine = params.physicEngine;
//         this.falling = true;
//     }

//     update(delta) {
//         super.update(delta);

//         this._physicEngine.update(this, delta);

//        if (this.y < 0) {
//         this.y = 0;
//        }

//        if (this.y + this.height >= this._game.height) {
//         this._game.gameOver();
//        }
//     }

//     flap() {
//         this.speed = -this._flapSpeed;
//     }
// }