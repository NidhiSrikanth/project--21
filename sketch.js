var wall;
var speed,weight;
var thickness, bullet;


function setup() {
  createCanvas(1000,400);
 speed=random(30,100);
 weight=random(30,52);
thickness= random (22,83);
 bullet= createSprite(50,200,50,5);
 bullet. velocityX= speed;
 bullet.shapeColor="white";
 console.log(speed);
 bullet.debug=true;
 wall=createSprite(900,200,thickness,height/2);
 wall.shapeColor= color (80,80,80);
}

function draw() {
  background(0);
  if (hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage= 0.5*weight*speed*speed*speed/(thickness*thickness*thickness);

  }
    if(damage>20){
      wall.shapeColor= color(255,0,0);

    }

    if (damage<20){
      wall.shapeColor= color(0,255,0);
    }
  
  

    

  
  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge= bullet.x+ bullet.width;
  wallLeftEdge= wall.x;
  if (bulletRightEdge>= wallLeftEdge){
    return true
  }
 else {return false;}
}