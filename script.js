const imgURL = "https://i.ibb.co/Q9yv5Jk/flappy-bird-set.png";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = imgURL;

const render = () => {

    const bgSource = {
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height,
      };

      const bgPartOneResult = {
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height,
      };

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
};

img.onload = render;


