var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState = 0;
var form, player, playerCount = 0 ;
var allPlayers, car1, car2,lifeImg,blastImg;
var cars = [];
var fuels,fuelImg,powercoinImg,powercoins,obstacles,obstacle1Img,obstacle2Img;

//BP
function preload() {
  backgroundImage = loadImage("../assets/background.png");
  car1_img = loadImage("../assets/car1.png");
  car2_img = loadImage("../assets/car2.png");
  track = loadImage("../assets/track.jpg");
  fuelImg = loadImage("../assets/fuel.png");
  powercoinImg = loadImage("../assets/goldCoin.png");
  obstacle1Img = loadImage("../assets/obstacle1.png");
  lifeImg = loadImage("../assets/life.png")
  obstacle2Img = loadImage("../assets/obstacle2.png");
  blastImg = loadImage("../assets/blast.png")
}

//BP
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
}

//BP
function draw() {
  background(backgroundImage);
  
  //If playerCount === 2 then update game state in db

  if(playerCount === 2 ){
    game.updateState(1);
  }

  //if gameState becomes 1 then create a play func inside game.js
  //call play()
  if(gameState === 1 ){
    game.play();
  }

  if(gameState === 2 ){
    game.showLeaderBoard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
