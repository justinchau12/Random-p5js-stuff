function setup() {
  createCanvas(400, 400)
  Xpos = 200
  Ypos = 200
  pressed_W = false
  pressed_S = false
  pressed_A = false
  pressed_D = false
}

function draw() {
  background(220)
  fill('yellow')
  arc(Xpos,Ypos,50,50,radians(45),radians(315),PIE)
  fill('black')
  strokeWeight(5)
  point(Xpos-5,Ypos-10)
  if (pressed_W == true){
    Ypos = Ypos - 3
  }
  if (pressed_S == true){
    Ypos = Ypos + 3
  }
  if (pressed_A == true){
    Xpos = Xpos - 3
  }
  if (pressed_D == true){
    Xpos = Xpos + 3
  }
  if (Ypos + 50 >= 450 && Ypos - 50 >= 400){
    Ypos = -50
  }
  else if (Ypos + 50 <= 0 && Ypos - 50 <= -50){
    Ypos = 450
  }
  if (Xpos + 50 >= 450 && Xpos - 50 >= 400){
    Xpos = -50
  }
  else if (Xpos + 50 <= 0 && Xpos - 50 <= -50){
    Xpos = 450
  }
}
  
function keyPressed(){
  if (keyCode == 87){
    pressed_W = true
    pressed_A = false
    pressed_D = false
  }
  if (keyCode == 83){
    pressed_S = true
    pressed_A = false
    pressed_D = false
  }
  if (keyCode == 65){
    pressed_A = true
    pressed_W = false
    pressed_S = false
  }
  if (keyCode == 68){
    pressed_D = true
    pressed_W = false
    pressed_S = false
  }
}
function keyReleased(){
  if (keyCode == 87){
    pressed_W = false
  }
  if (keyCode == 83){
    pressed_S = false
  }
  if (keyCode == 65){
    pressed_A = false
  }
  if (keyCode == 68){
    pressed_D = false
  }
}

