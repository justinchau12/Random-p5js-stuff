//Connect Four.
//Ignore TypeError; The code still works.

//Defining Variables.
p5.disableFriendlyErrors = true
canva = []
turn = 0
found = false
//Creating the canvas.
function setup() {
  createCanvas(350, 300)
  textAlign(CENTER)
  textStyle(BOLD)
  textSize(35)
  stroke('black')
  strokeWeight(5)
  for (let column = 0; column < 6; column++) {
    for (let row = 0; row < 7; row++) {
      canva = append(canva, new Cell(row * 50, column * 50))
    }
  }
}

function draw() {
  //Display the current status of every cell.
  background("blue");
  for (let index = 0; index <= 41; index++) {
    canva[index].display();
  }
  //Detect Row Connection
  for (let index = 0; index <= 41; index++){
    if (0 <= index%7 && index%7 <= 3){
      if (canva[index].status == 1 && canva[index+1].status == 1 && canva[index+2].status == 1 && canva[index+3].status == 1){
        fill('red')
        text("RED WINS!",175,165)
        noLoop()
      }
      else if(canva[index].status == 2 && canva[index+1].status == 2 && canva[index+2].status == 2 && canva[index+3].status == 2){
        fill('yellow')
        text("YELLOW WINS!",175,165)
        noLoop()
      }
    }
  }
  //Detect Column Connection
  for (let k = 0; k <=6; k++){
    for (let index = k; index <= k+14; index = index + 7){
      if(canva[index].status == 1 && canva[index+7].status == 1 && canva[index+14].status == 1 && canva[index+21].status == 1){
        fill('red')
        text("RED WINS!",175,165)
        noLoop()                             
      }
      else if(canva[index].status == 2 && canva[index+7].status == 2 && canva[index+14].status == 2 && canva[index+21].status == 2){
        fill('yellow')
        text("YELLOW WINS!",175,165)
        noLoop()
      }
    }
  }
  //Detect Anti-Diagonal Connection
  for(let k = 0;k<=14;k = k + 7){
    for (index = k;index <= k+3;index++){
      if(canva[index].status == 1 && canva[index+8].status == 1 && canva[index+16].status == 1 && canva[index+24].status == 1){
        fill('red')
        text("RED WINS!",175,165)
        noLoop()                             
      }
      else if(canva[index].status == 2 && canva[index+8].status == 2 && canva[index+16].status == 2 && canva[index+24].status == 2){
        fill('yellow')
        text("YELLOW WINS!",175,165)
        noLoop()
      }
    }
  }
  //Detect Diagonal Connection
  for(let k = 3;k<=17;k = k + 7){
    for (index = k;index <= k+3;index++){
      if(canva[index].status == 1 && canva[index+6].status == 1 && canva[index+12].status == 1 && canva[index+18].status == 1){
        fill('red')
        text("RED WINS!",175,165)
        noLoop()                              
      }
      else if(canva[index].status == 2 && canva[index+6].status == 2 && canva[index+12].status == 2 && canva[index+18].status == 2){
        fill('yellow')
        text("YELLOW WINS!",175,165)
        noLoop()
      }
    }
  }
}

//Detect which column is clicked (From the bottom so the coin drops to the lowest row)
function mouseClicked() {
  for (let index = 41; index > 0, found == false; index--) {
    canva[index].ifClicked();
  }
}
class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.status = 0;
  }
  display() {
    if (this.status == 0) {
      fill("lightgrey");
      ellipse(this.x + 25, this.y + 25, 40, 40);
    }
    if (this.status == 1) {
      fill("red");
      ellipse(this.x + 25, this.y + 25, 40, 40);
      found = false;
    }
    if (this.status == 2) {
      fill("yellow");
      ellipse(this.x + 25, this.y + 25, 40, 40);
      found = false;
    }
  }
  ifClicked() {
    if (this.x <= mouseX && mouseX <= this.x + 50 && this.status == 0) {
      if (turn == 0) {
        this.status = 1;
        turn = 1;
        found = true;
      } else if (turn == 1) {
        this.status = 2;
        turn = 0;
        found = true;
      }
    }
  }
}