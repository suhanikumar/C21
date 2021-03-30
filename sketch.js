var car, wall;

function setup() {
  createCanvas(1200,800);
  wall = createSprite(600, 200, 50, 80);
  wall.shapeColor = "green";
  car = createSprite(400,200,80,30);
  car.shapeColor = "green";
}

function draw() {
  background(0,0,0);
  wall.debug = true; 
  car.debug = true;

car.velocityX = 3;

bounceOff(car, wall);

  drawSprites();
}

