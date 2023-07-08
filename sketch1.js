var Runner1Animation, track, runner1;
var Runner2Animation, runner2;
var Runner3Animation, runner3;
var runners = [];

function preload() {
    Runner1Animation = loadAnimation("./assets/Runner1_1.png", "./assets/Runner1_2.png", "./assets/Runner1_3.png", "./assets/Runner1_4.png", "./assets/Runner1_5.png");
    track = loadImage("./assets/track.png");
    Runner2Animation = loadAnimation("./assets/Runner2_1.png","./assets/Runner2_2.png","./assets/Runner2_3.png","./assets/Runner2_4.png","./assets/Runner2_5.png");
    Runner3Animation = loadAnimation("./assets/Runner3_1.png","./assets/Runner3_2.png","./assets/Runner3_3.png","./assets/Runner3_4.png","./assets/Runner3_5.png");
  }

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    runner1 = createSprite(535,700, 60, 60);
    runner1.addAnimation("Runner1", Runner1Animation);
    runner1.scale = 0.97;

    runner2 = createSprite(957,700, 60, 60);
    runner2.addAnimation("Runner2", Runner2Animation);
    runner2.scale = 0.92;

    runner3 = createSprite(1400,700, 60, 60);
    runner3.addAnimation("Runner3", Runner3Animation);
    runner3.scale = 1.7;    
}
function draw() {
    background("white");
    image(track, 0, -height * 5, width, height * 6);
    if(keyIsDown("up")){
    runner1.y += 100;
    console.log(runner1.y);
    }
    // if(keyIsDown("up")){
    //     runner2.y=runner2.y + 5;
    // }
    // if(keyIsDown("up")){
    //     runner3.y=runner3.y + 5;
    // }
    // if (gameState === 1) {
    //     game.play();
    // }
    
    drawSprites();
}