var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);
  speed=random(10,50);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  car.shapeColor="blue";
  wall=createSprite(800,200,60,height/2);
  car.velocityX = speed;
  
}

function draw() {
  background(205,153,0); 
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    var def=0.5*weight*speed*speed/22500;

    if (def>25 ){
      car.shapeColor=color("green");
    }
  }
  if(def>5 && def<10){
    car.shapeColor=color("yellow");
  }
  if(def<5){
    car.shapeColor = color("black");
  }
  if(def>10 && def<25){
    car.shapeColor=color("red");
  }
    
  drawSprites();
}
