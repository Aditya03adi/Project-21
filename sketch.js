var bullet,  wall, weight, speed;
var bulletRightedge, wallLeftedge;
var thickness
function setup() {
  createCanvas(1600,400);
 thickness =random(30,53)
  speed=random(223,321);
  weight=random(30,52);
  bullet = createSprite(50,200,5,5);
  bullet.shapeColor="white";
  wall=createSprite(1200,200,thickness,height/2)
 
}

function draw() {
  background("black");  
  bullet.velocityX=speed;
  if (hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if (damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(230,230,0)
    }
    
  }

  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightedge=bullet.x+bullet.width;
   wallLeftedge=wall.x;

  if (bulletRightedge>=wallLeftedge){
    return true
  }
    else {
return false
    }
  }

