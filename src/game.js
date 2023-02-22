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

