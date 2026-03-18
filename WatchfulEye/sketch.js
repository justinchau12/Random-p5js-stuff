function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke()
  noCursor()
  ellipse1X = constrain(mouseX,175,225)
  ellipse1Y = constrain(mouseY,175,225)
  ellipse2X = constrain(mouseX,150,250)
  ellipse2Y = constrain(mouseY,150,250)
  ellipse3X = constrain(mouseX,125,275)
  ellipse3Y = constrain(mouseY,125,275)
  ellipse4X = constrain(mouseX,100,300)
  ellipse4Y = constrain(mouseY,100,300)
  fill(255,255,255)
  ellipse(200,200,325)
  fill(255,0,0,20)
  ellipse(ellipse1X,ellipse1Y,250)  
  fill(255,0,0,40)
  ellipse(ellipse2X,ellipse2Y,175)
  fill(255,0,0,60)
  ellipse(ellipse3X,ellipse3Y,100)  
  fill(255,0,0,100)
  ellipse(ellipse4X,ellipse4Y,25)  
}