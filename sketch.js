var hr, min, sec;
var hrAngle, minAngle, secAngle;

function setup() {
  createCanvas(800,800);
  
  
  angleMode(DEGREES); 
}

function draw() {
  background(0);  

  hr = hour();
  min = minute();
  sec = second ();

  //seconds
  secAngle = map(sec, 0, 60, 0 , 360);
  push ();
  translate(400, 400);
  rotate (180 + secAngle);
  stroke ("red");
  strokeWeight(5);
  line (0, 0, 0, 200);
  pop ();
  
  //minutes
  minAngle = map(min, 0, 60, 0 , 360);
  push ();
  translate(400, 400);
  rotate (180 + minAngle);
  stroke ("blue");
  strokeWeight(2);
  line (0, 0, 0, 150);
  pop ();

  //hour
  hrAngle = map(hr, 0, 12, 0 , 360);
  push ();
  translate(400, 400);
  rotate (180 + hrAngle);
  stroke ("green");
  strokeWeight(2);
  line (0, 0, 0, 80);
  pop ();

  // arcs
  noFill();
  strokeWeight(5);
  stroke ("red");
  arc (400, 400, 420, 420, -90, secAngle - 90);
  stroke ("blue");
  arc (400, 400, 410, 410, -90, minAngle - 90);
  stroke ("green");
  arc (400, 400, 400, 400, -90, hrAngle - 90);

  drawSprites();
}