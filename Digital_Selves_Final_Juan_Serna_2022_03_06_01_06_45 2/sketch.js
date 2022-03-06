'use strict'
let eyebrowMove;
let micVar;
let mic;
let eyeBallMove;
let myMap = 0;
let raiseEyebrow = 0;
let lowerEyebrow = 0;
let eyeBallsMove = 0;
let moveX = 0;
let moveY = 0;
//let img;


function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  stroke(255,102,153, 95);
  strokeWeight(10);
  mic = new p5.AudioIn();
  mic.start();
  frameRate(60);
}

function draw() {

  //console.log(vol);
  console.log("mouse x is:"+ mouseX)
  console.log("mouse y is:"+ mouseY)
  myMap = map(mouseX, 0, width, 50,90)
  console.log(myMap)
  
  if(mouseX > 85 && mouseX < 350) {
    raiseEyebrow = 1;
  } else {
    raiseEyebrow = 0;
  }
  if(mouseY > 130 && mouseY <400){
    lowerEyebrow =1;
  } else {
    lowerEyebrow = 0;
    loadImage('JuanAbstract.png', img => {
      image(img,0,0);
  });
  }
  

  console.log(lowerEyebrow);
  console.log(raiseEyebrow);
  movingObjects()
  leftEar();
  rightEar();
  circleFace();
  eyeBallRight();
  eyeBallLeft();
  nose();
  rightEye();
  leftEye();
  bigSmile();
  eyebrowLeft();
  eyebrowRight();
  leftCheek()
  rightCheek();
  movingMouth();
  fill(2)
  
}
  function movingObjects()
{  
   
fill(255)
  circle(moveX, width*0.002,width*0.4,width*0.2);

 fill(255, 255, 50, 0)

  ellipse(moveX, width *1 , height / 1.8);
  fill(194,24,7,2)

 rect(moveX, width*0., height / 2)
  fill(499,0,0,0,)
  rect(moveX, width* .6, height *.3)
   if (frameCount % 400 == 0){
   moveX = 0;
 } else {
   moveX++;
 }
}
  
  function leftCheek (){
  strokeWeight(5)
  fill(255)
  
  rect( width * 0.1,width * 0.480,width * 0.2,width * .2,width * 0.,width *       0.9,width * 0.,width * 0.1);
  }

  function rightCheek (){
    strokeWeight(5)
  fill(255)
  rect( width * .52,width * 0.480,width * 0.180,width * .2,width * 0.2,width *   0.,width * 0.6,width * 0.);
    
    
  }

  function rightEye () {

  
  fill(215, 222, 126);
  circle(width * 0.28, width * 0.37, width * 0.12, );
  //pupil
  fill(1);
  //  circle(0, mouseY, width * 0.2,  width * 0.38, width * 0.6, mouseY);
  circle(width * 0.28, width * 0.38, width * 0.06);
  }

//mouth
function bigSmile (){   
  push();
  fill(255, 255, 255);
  
  rect( width * 0.31,width * 0.56,width * 0.20,width * 0.21,width * 0.0,width *   0.0,width * 0.1,width * 0.1);
   
  //rect(width *0.36 , width *0.56, width *0.11, width *0.1);
  fill(255, 255, 255);
  pop();
}

function movingMouth (){    
  var vol = mic.getLevel();
  push();
  fill(2);
 ellipse(width* 0.41, width*0.64 ,width* 0.19, vol* 100)
  fill(2);
  pop();
}


function smallSmile (){   
  push();
  fill(255, 0, 255, 10); 
  rect( width * 0.36,width * 0.56,width * 0.10,width * 0.1,width *       0.0,width * 0.0,width * 0.1,width * 0.1);
  fill(255, 255, 255);
  pop()
}

function eyebrowLeft(){
  push();
  fill(224,141,60);
  if (raiseEyebrow == 0){
  rect( width * 0.18,width * 0.264,width * 0.20,width * .1,width * 0.,width * 0.1,width * 0.,width * 0.2 );
  }
  else if (raiseEyebrow == 1){
  rect( width * 0.18,width * 0.258,width * 0.20,width * .1,width * 0.,width * 0.1,width * 0.,width * 0.2 );
  }
  fill(255, 255, 255);
  pop()
}

  //eye brow right
function eyebrowRight (){
  push()
  fill(224,141,60);
  if (raiseEyebrow == 0){
  rect( width * 0.44,width * 0.265,width * 0.2,width * .0999,width *0.31,width *0.,width * 0.8 ,width * 0.);
  }
  
  else if (raiseEyebrow == 1){
  rect( width * 0.44,width * 0.259,width * 0.2,width * .0999,width *0.31,width *0.,width * 0.8 ,width * 0.);
  fill(255, 255, 255);
  pop()
  }
}


function eyeBallLeft() {
  push();
  fill(255, 255, 255);
  rect( width * 0.18,width * 0.27,width * 0.20,width * 0.2,width *.0,width * 0.1,width * 0.1,width * .6);
  fill(255, 255, 255);
  pop()
}
function eyeBallRight(){
  beginShape();
  push();
  fill(255, 255, 255);
  rect( width * 0.44,width * 0.27,width * 0.20,width * 0.2,width *             
  0.10,width * 0.01,width * 0.1,width * 0.3);
  fill(215, 255, 255);
  pop(),
  endShape(CLOSE) }


function bottomLip() {
  beginShape();
  fill(255, 0, 0);
  rect( width * 0.56,width * 0.58,width * 0.1,width * 0.1,width * 0.12,width * 0.06,width * 0.02,width * 0.1);
  endShape(CLOSE)
}


function leftEar (){
  beginShape()
  fill(224,141,60)
  ellipse(width * 0.18, width * 0.2, width * 0.18, width * 0.28); 
  fill(255,128,128)
  ellipse(width * 0.2, width * 0.22, width * 0.14, width * 0.20);
  noStroke();
  push();
  fill(2, 0, 0);
  pop();
  endShape();
  push();
  fill(128, 128, 0);
  //rect(width * 0.12, width * 0.1, width * 0.12, width * 0.12);
  pop();
  beginShape();
  fill(255, 0, 0);
  push();
  endShape(CLOSE)
}

function leftEye () {
//left eye  like to add eye lids for a wink
  fill(215, 222, 126);
  circle(width * 0.56, width * 0.38, width * 0.12);
  //pupil
  fill(1);
  circle(width * 0.56, width * 0.38, width * 0.06);
}

function rightEar () { 
//right ear 
  stroke(2)
  fill(224,141,60)
  ellipse(width * 0.60, width * 0.2, width * 0.18, width * 0.28); 
  fill(255,128,128)
  ellipse(width * 0.60, width * 0.22, width * 0.14, width * 0.20);
}

function circleFace () {
//face
  stroke(30);
  push();
  fill(224, 141 ,60,)
  beginShape();
  circle(width * 0.4, width * 0.4, width * 0.6);
  endShape();
  pop();
  }

function nose (){
  fill(255,170,255)
  beginShape()
  rect ( width * 0.36,width * 0.44, width * 0.1, width * 0.1,width * 0.1,width * 0.2, width * 0.,width * 0.);
  fill(2)
  rect ( width * 0.36,width * 0.42, width * 0.1, width * 0.1,width * 0.1,width * 0.2, width * 0.,width * 0.);

  endShape(CLOSE)

}
  