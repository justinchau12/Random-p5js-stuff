function setup() {
  createCanvas(400, 400)
  speedX = 2
  speedY = 2
  Xpos = 200
  Ypos = 100
}

function draw() {
  background(220)
  ellipse(Xpos,Ypos,50,50)
  Xpos = Xpos + speedX
  Ypos = Ypos + speedY
  if (Xpos <= 25 || Xpos >= 375){
    speedX = speedX * -1
  }
  if (Ypos <= 25 || Ypos >= 375){
    speedY = speedY * -1
  }
  text(Xpos+","+Ypos,Xpos+30,Ypos-15)
}