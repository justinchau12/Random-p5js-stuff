function setup() {
  createCanvas(400,400)
}

function draw() {
  background(0)
  for (x = 0 ; x < width ; x = x + 20){
    let distance = abs(mouseX - x)
    fill(distance) 
    rect(x, 0, 20, height)
  }
}