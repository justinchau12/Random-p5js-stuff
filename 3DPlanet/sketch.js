function preload(){
  img = loadImage('256x256bb.jpg')
}


function setup() {
  createCanvas(800, 400,WEBGL);
  y1 = 0
  y2 = 0
}

function draw() {
  noCursor()
  background(81, 91, 201, 50)
  
  //translate(mouseX-400,mouseY-200)
  translate(0,0)
  //fill('red')
  rotateY(y1)
  texture(img)
  sphere(60)
  
  translate(200,0)
  fill('blue')
  rotateY(y2)
  sphere(30,12,12)
  
  translate(75,0)
  fill('grey')
  rotateY(y1)
  sphere(12.5,12,12)
  
  y1 = y1 + 0.01
  y2 = y2 + 0.04
}