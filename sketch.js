var sea, seaImg, ship, shipImg1;

function preload() {

  shipImg1 = loadAnimation("ship-1.png", "ship-2.png");
  seaImg = loadImage ("sea.png");

}

function setup(){

  createCanvas(400,400);

  sea= createSprite(400,200,800,800);
  sea.velocityX = -2;
  sea.addImage(seaImg);
  sea.scale = 0.3;

  ship = createSprite(100,200,50,50);
  ship.addAnimation("move", shipImg1);
  ship.scale = 0.2



}

function draw() {
  background("white")
  
  if (sea.x <0) {
      sea.x=sea.width/2;
  }
 
  drawSprites()
}