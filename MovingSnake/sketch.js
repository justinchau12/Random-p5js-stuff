let xPos = []
let yPos = []

function setup() {
  createCanvas(400, 400)
  noStroke()
  noCursor()
  
  for (let alpha = 0; alpha < 100; alpha++) {
    xPos[alpha] = 0
    yPos[alpha] = 0 
  }
}
function draw() {
  background(220)

  for (let alpha = 0; alpha < xPos.length-1; alpha++) {
    xPos[alpha] = xPos[alpha+1]
    yPos[alpha] = yPos[alpha+1]
  }
  
  xPos[xPos.length-1] = mouseX
  yPos[yPos.length-1] = mouseY

  for (let alpha = 0; alpha < xPos.length; alpha++) {
    constrain(alpha,0,50)
    fill('#0047AB')
    ellipse(xPos[alpha], yPos[alpha], alpha, alpha)
    fill('black')
    ellipse(xPos[xPos.length-1]-10, yPos[yPos.length-1]+10,10)
    ellipse(xPos[xPos.length-1]+10, yPos[yPos.length-1]+10,10)
    fill('#eb3477')
    rect(xPos[xPos.length-1]-7.5, yPos[yPos.length-1]+20,15,20)
    fill('#0047AB')
    triangle(xPos[xPos.length-1]-8, yPos[yPos.length-1]+40,xPos[xPos.length-1], yPos[yPos.length-1]+25,xPos[xPos.length-1]+8, yPos[yPos.length-1]+40)
    fill('#d0d624')
    ellipse(xPos[xPos.length-1]-20, yPos[yPos.length-1]-15,20)
    ellipse(xPos[xPos.length-1]+20, yPos[yPos.length-1]-15,20)
    fill('black')
    ellipse(xPos[xPos.length-1]-20, yPos[yPos.length-1]-15,5,20)
    ellipse(xPos[xPos.length-1]+20, yPos[yPos.length-1]-15,5,20)
  }
}