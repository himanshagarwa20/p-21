if (hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
}
if (damage>10)
{
  wall.shapeColor(255,0,0);
}
if (damage<10)
{
  wall.shapeColor=color(0,255,0);
}

function hasCollided(bullet,wall){
    bulletRightEdge=bullet.x+bullet.width;
    wallleftEdge=wall.x;
    if (bulletRightEdge>=wallleftEdge)
    {
      return true
    }
    return false
  }
  