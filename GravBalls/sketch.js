function setup() {
  createCanvas(400, 400)
  ballArray = []
  ballArray[0] = new GravityBall(200,0,50)
  
}

function draw() {
  background(220)
  for (index=0;index<ballArray.length;index++){
    ballArray[index].display()
    ballArray[index].update()
  }
}

class GravityBall {
  constructor(x, y, diameter) {
    this.x = x  
    this.y = y  
    this.width = diameter  
    this.r = random(0, 256)
    this.g = random(0, 256)
    this.b = random(0, 256)
    this.speed = 0 
  }

  display() {
    // Display the ball
    fill(this.r, this.g, this.b, 150)
    ellipse(this.x, this.y, this.width, this.width)
  }

  update() {
    // Move GravityBall down based on speed
    this.y = this.y + this.speed

    // Increase speed slightly (gravity)
    this.speed = this.speed + 0.1

    // When ball reaches the bottom, reverse speed
    if (this.y > height) {
      this.y = height
      this.speed = this.speed * -0.90
    }
  }
}
function mouseClicked(){
  append(ballArray,new GravityBall(mouseX,mouseY,50))
}