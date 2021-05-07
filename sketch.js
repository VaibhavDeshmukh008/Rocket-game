var asteroid,asteroidImg;
var gameover,gameoverImg;
var restart,restartImg;
var space,spaceImg;
var start,startImg;
var rocket,rocketImg;
var coin,coinImg;

var PLAY=1
var END=0
var gameState=PLAY
var coingroup;
var asteroidgroup;

function preload(){
  asteroidImg=loadImage("asteroid.png");
  gameoverImg=loadImage("gameover.jpg");
  restartImg=loadImage("restart.png");
  spaceImg=loadImage("space.jpg");
  startImg=loadImage("start.png");
  rocketImg=loadImage("rocket.png")
  coinImg=loadImage("coin.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight)
  space=createSprite(300,200,50,50)
  space.addImage(spaceImg)
  rocket=createSprite(windowWidth/2,550,20,20)
  rocket.addImage(rocketImg)
  gameover=createSprite(windowWidth/2,550,20,20)
  gameover.addImage(gameoverImg)
  restart=createSprite(windowWidth/2,windowHeight/2)
  restart.addImage(restartImg)
  restart.scale=0.9
  gameover.scale=0.7
  rocket.scale=0.5
  space.scale=2
  space.velocityY=3

  asteroidgroup =new Group();
  coingroup=new Group();

}

function draw(){
  background("red")
  rocket.velocityX=0
  rocket.velocityY=0

  if(space.y>300){
    space.y=200
  }
  if(gameState===PLAY){
   gameover. visible=false
   restart.visible=false
  
  if(keyDown("left")){
    rocket.velocityX=-3
  }
  if(keyDown("right")){
    rocket.velocityX=3
  }
  SpawnCoin()
  SpawnAsteroid()

  if(rocket.isTouching(asteroidgroup)){
    gameState=END
  }
  }
  if (gameState===END){
    space.y=300
    rocket.velocityY=0
    restart.visible=true
    gameover.visible=true
  }
  
  drawSprites()

}
function SpawnCoin(){


  if(frameCount%80===0){
  coin=createSprite(windowWidth-600,windowHeight-700)
  coin.addImage(coinImg)
  coin.scale=0.5
  coin.velocityY=10
  coin.x=Math.round(random(windowWidth,windowHeight))
  coin.lifetime=60
  coingroup.add(coin)
  }
}
function SpawnAsteroid(){
if(frameCount%80===0){
  asteroid=createSprite(windowWidth-200,windowHeight-700)
  asteroid.addImage(asteroidImg)
  asteroid.scale=0.1
  asteroid.velocityY=10
  asteroid.x=Math.round(random(windowWidth,windowHeight))
  asteroid.lifetime=70
  asteroidgroup.add(asteroid)
}
}