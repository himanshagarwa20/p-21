var bullet, wall;
var speed, weight;


function setup() {
createCanvas(1600,400);
bullet=createSprite(50, 200, 50, 5);
wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor="green";
speed=random(223,321);
weight=random(30,52);
bullet.velocityX=speed;
bullet.shapeColor=color(255);
}

function draw() {
  background(255,255,255);  
if (wall.x-bullet.x< (bullet.width+wall.width)/2)
{
  bullet.velocityX=0
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180)
  {
    bullet.shapeColor=(255,0,0);
  }
  thickness=random(22,83);
if (deformation<180&&deformation>100)
{
  bullet.shapeColor=(230,230,0);
}
if (deformation<100)
{
bullet.shapeColor=(0,255,0);
}
wall.shapeColor(80,80,80);
}
  drawSprites();

}

