class MovingObjects{
  constructor(){
  }
    
}

  display();{
   function movingObjects()
{  fill(2)
  circle(moveX, width*0.002,width*0.4,width*0.2);
  fill(255, 255, 50, 100)
  ellipse(moveX, width *1 , height / 1.8);
  fill(194,24,7)
  rect(moveX, width*0., height / 2)
  fill(456,)
  rect(moveX, width* .6, height *.3)
   if (frameCount % 400 == 0){
   moveX = 0;
 } else {
   moveX++;
 }
}