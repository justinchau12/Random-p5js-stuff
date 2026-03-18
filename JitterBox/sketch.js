let boxArray = []

function setup() {
  createCanvas(400, 400)
  for (index=0;index < 50; index++)
    append(boxArray,new Jitterbox(random(width),random(height),(random(50,75)),random(255),random(255),random(255)))
}

function draw() {
  background(220)
  for (index=0;index < 50; index++){
  boxArray[index].move()
  boxArray[index].display()
  }
}

class Jitterbox{
  constructor(w,h,s,r,g,b){
    this.width = w
    this.height = h
    this.size = s
    this.r = r
    this.g = g
    this.b = b
  }
  move(){
    this.width = this.width + random(-1,1)
    this.height = this.height + random(-1,1)
  }
  display(){
    fill(this.r,this.g,this.b)
    square(this.width,this.height,this.size)
    strokeWeight(random(1,5))
  }
}