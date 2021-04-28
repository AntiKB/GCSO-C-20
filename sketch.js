var Car;
var Wall;

var Deformation;

var Speed;
var Weight;
function setup() {
  createCanvas(1600,400);
  
  Car = createSprite(50,200,50,50);
  Car.shapeColor = "WHITE";
  Wall = createSprite(1500,200,100,800);
  Wall.shapeColor = "WHITE";

  Car.depth = Wall.depth + 1;
}

function draw() {
  background(0,0,0);  
  
  if(keyWentDown("SPACE")){
    doCrashTest();
  }
  
    if(Wall.x - Car.x < (Car.width + Wall.width) / 2){
    Car.velocityX = 0;
    Deformation = (0.5*Weight*Speed*Speed)/22500;
    if(Deformation > 180){
      Car.shapeColor = color(255,0,0);
    }
    if(Deformation < 180 && Deformation >100){
      Car.shapeColor = color(230,230,0);
    }
    if(Deformation < 100){
      Car.shapeColor = color(0,255,0);
    }
  }
  
  drawSprites();
}

function doCrashTest() {
  Car.shapeColor = color(255,255,255);
  
  Speed = random(55,90);
  Weight = random(400,1500);
  
  Car.x = 50;
  Car.y = 200;
  Car.velocityX = Speed;
}